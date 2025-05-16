// server/src/novedades/novedades.service.ts
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { ShiftType, Prisma } from "@prisma/client";

@Injectable()
export class NovedadesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Crea una novedad y registra IN/OUT en ShiftLog.
   */
  async createNovedad(
    firebaseUid: string,
    description: string,
    entryMethod: "VOICE" | "MANUAL",
    isLast: boolean,
  ) {
    const user = await this.prisma.user.findUnique({
      where: { firebaseUid },
      select: { id: true },
    });
    if (!user) throw new NotFoundException("Usuario no encontrado");

    const novedad = await this.prisma.novedad.create({
      data: {
        description,
        entryMethod,
        user: { connect: { firebaseUid } },
      },
    });

    await this.prisma.shiftLog.create({
      data: {
        userId: user.id,
        type: isLast ? ShiftType.OUT : ShiftType.IN,
      },
    });

    return novedad;
  }

  /**
   * Recupera todas las novedades de un usuario, con filtro opcional por fechas.
   */
  async findAllForUser(firebaseUid: string, start?: string, end?: string) {
    const user = await this.prisma.user.findUnique({
      where: { firebaseUid },
    });
    if (!user) throw new NotFoundException("Usuario no encontrado");

    const dateFilter: { gte?: Date; lte?: Date } = {};
    if (start) dateFilter.gte = new Date(start);
    if (end) dateFilter.lte = new Date(end);

    const where: Prisma.NovedadWhereInput = { userId: user.id };
    if (start || end) where.timestamp = dateFilter;

    return this.prisma.novedad.findMany({
      where,
      orderBy: { timestamp: "desc" },
    });
  }

  /**
   * Devuelve todas las novedades sin filtrar. Sólo Admin.
   */
  async findAllAdmin() {
    return this.prisma.novedad.findMany({
      orderBy: { timestamp: "desc" },
    });
  }

  /**
   * Estado actual de turno y sesión de inicio:
   * - Si el último log es OUT (o no hay logs): status="OUT", sessionStart=null.
   * - Si hay un IN sin OUT posterior: status="IN", sessionStart = primer IN después del último OUT (o primer IN).
   */
  async getCurrentTurnStatus(firebaseUid: string): Promise<{
    status: "IN" | "OUT";
    sessionStart: Date | null;
  }> {
    // 1) Buscamos el último OUT
    const lastOut = await this.prisma.shiftLog.findFirst({
      where: { user: { firebaseUid }, type: ShiftType.OUT },
      orderBy: { timestamp: "desc" },
      select: { timestamp: true },
    });

    // 2) Buscamos el último log general
    const lastLog = await this.prisma.shiftLog.findFirst({
      where: { user: { firebaseUid } },
      orderBy: { timestamp: "desc" },
      select: { type: true },
    });

    // Si no hay logs o el último es OUT → turno cerrado
    if (!lastLog || lastLog.type === ShiftType.OUT) {
      return { status: "OUT", sessionStart: null };
    }

    // Hay un IN abierto: buscamos el primer IN tras lastOut (o el primer IN global)
    const inFilter: Prisma.ShiftLogWhereInput = {
      user: { firebaseUid },
      type: ShiftType.IN,
      ...(lastOut ? { timestamp: { gt: lastOut.timestamp } } : {}),
    };
    const firstIn = await this.prisma.shiftLog.findFirst({
      where: inFilter,
      orderBy: { timestamp: "asc" },
      select: { timestamp: true },
    });

    return {
      status: "IN",
      sessionStart: firstIn ? firstIn.timestamp : null,
    };
  }

  /**
   * Duración del turno actual:
   * - Si está cerrado (último log OUT): diferencia entre ese OUT y el primer IN de ese turno.
   * - Si está abierto (último log IN): diferencia entre ahora y el primer IN de ese turno.
   */
  async getCurrentShiftDuration(firebaseUid: string): Promise<number> {
    const { status, sessionStart } =
      await this.getCurrentTurnStatus(firebaseUid);
    if (!sessionStart) return 0;

    if (status === "OUT") {
      // Para OUT: restamos lastOut - sessionStart
      const lastOut = await this.prisma.shiftLog.findFirst({
        where: { user: { firebaseUid }, type: ShiftType.OUT },
        orderBy: { timestamp: "desc" },
        select: { timestamp: true },
      });
      if (lastOut) {
        return Math.round(
          (lastOut.timestamp.getTime() - sessionStart.getTime()) / 60000,
        );
      }
    }

    // Para IN abierto o sin OUT: tiempo hasta ahora
    return Math.round((Date.now() - sessionStart.getTime()) / 60000);
  }
}
