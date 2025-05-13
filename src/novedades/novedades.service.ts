// server/src/novedades/novedades.service.ts
import { Injectable } from "@nestjs/common";
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
    // Crear la novedad
    const novedad = await this.prisma.novedad.create({
      data: {
        description,
        entryMethod,
        user: { connect: { firebaseUid } },
      },
    });

    // Registrar turno IN/OUT
    await this.prisma.shiftLog.create({
      data: {
        user: { connect: { firebaseUid } },
        type: isLast ? ShiftType.OUT : ShiftType.IN,
      },
    });

    return novedad;
  }

  /**
   * Recupera todas las novedades (de todos los usuarios),
   * con filtro opcional por fechas `start` y `end`.
   */
  async findAllForUser(
    _firebaseUid: string,
    start?: string,
    end?: string,
  ) {
    // Construir filtro de fechas
    const dateFilter: { gte?: Date; lte?: Date } = {};
    if (start) dateFilter.gte = new Date(start);
    if (end) dateFilter.lte = new Date(end);

    // Solo aplicamos timestamp si vienen fechas
    const where: Prisma.NovedadWhereInput = {};
    if (start || end) {
      where.timestamp = dateFilter;
    }

    // Devolvemos TODOS los registros, ordenados descendentemente
    return this.prisma.novedad.findMany({
      where,
      orderBy: { timestamp: "desc" },
    });
  }

  /**
   * Devuelve todas las novedades sin filtrar. (Antiguo findAllAdmin)
   * Puede seguir usándose internamente si se desea.
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
   * Duración del turno actual:
   * - Si el último log es OUT: diferencia entre el OUT y el IN anterior.
   * - Si está abierto (último log IN): diferencia entre ahora y ese IN.
   */
  async getCurrentShiftDuration(firebaseUid: string): Promise<number> {
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
      return Math.round(
        (lastOut.timestamp.getTime() - lastIn.timestamp.getTime()) / 60000,
      );
    }
    if (lastIn) {
      return Math.round((Date.now() - lastIn.timestamp.getTime()) / 60000);
    }
    return 0;
  }
}
