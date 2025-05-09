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
    // 1) Obtener usuario
    const user = await this.prisma.user.findUnique({
      where: { firebaseUid },
      select: { id: true },
    });
    if (!user) throw new NotFoundException("Usuario no encontrado");

    // 2) Crear la novedad
    const novedad = await this.prisma.novedad.create({
      data: {
        description,
        entryMethod,
        user: { connect: { firebaseUid } },
      },
    });

    // 3) Registrar turno IN/OUT
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
   * Devuelve todas las novedades sin filtrar. Solo Admin.
   */
  async findAllAdmin() {
    return this.prisma.novedad.findMany({
      orderBy: { timestamp: "desc" },
    });
  }

  /**
   * Estado actual de turno:
   * - 'IN'  si el último ShiftLog es IN
   * - 'OUT' en cualquier otro caso
   */
  async getCurrentTurnStatus(firebaseUid: string): Promise<"IN" | "OUT"> {
    const lastLog = await this.prisma.shiftLog.findFirst({
      where: { user: { firebaseUid } },
      orderBy: { timestamp: "desc" },
      select: { type: true },
    });
    return lastLog?.type === ShiftType.IN ? "IN" : "OUT";
  }

  /**
   * Duración del turno actual calculada:
   * - Si el último log es OUT: diferencia entre el OUT y el IN anterior.
   * - Si está abierto (último log IN): diferencia entre ahora y ese IN.
   */
  async getCurrentShiftDuration(firebaseUid: string): Promise<number> {
    // Obtener últimos logs
    const lastOut = await this.prisma.shiftLog.findFirst({
      where: { user: { firebaseUid }, type: ShiftType.OUT },
      orderBy: { timestamp: "desc" },
      select: { timestamp: true },
    });
    const lastIn = await this.prisma.shiftLog.findFirst({
      where: { user: { firebaseUid }, type: ShiftType.IN },
      orderBy: { timestamp: "desc" },
      select: { timestamp: true },
    });

    if (lastOut && lastIn && lastOut.timestamp >= lastIn.timestamp) {
      // Turno cerrado: duración entre IN y OUT
      return Math.round(
        (lastOut.timestamp.getTime() - lastIn.timestamp.getTime()) / 60000,
      );
    }
    if (lastIn) {
      // Turno abierto: duración desde IN hasta ahora
      return Math.round((Date.now() - lastIn.timestamp.getTime()) / 60000);
    }
    return 0;
  }
}
