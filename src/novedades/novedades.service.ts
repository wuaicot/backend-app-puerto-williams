import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { ShiftType } from "@prisma/client";

@Injectable()
export class NovedadesService {
  constructor(private prisma: PrismaService) {}

  /** Crea una novedad y (opcionalmente) marca fin de turno. */
  async createNovedad(
    firebaseUid: string,
    description: string,
    entryMethod: "VOICE" | "MANUAL",
    isLast: boolean,
  ) {
    const novedad = await this.prisma.novedad.create({
      data: {
        description,
        entryMethod,
        user: { connect: { firebaseUid } },
      },
    });
    if (isLast) {
      await this.prisma.shiftLog.create({
        data: { user: { connect: { firebaseUid } }, type: ShiftType.OUT },
      });
    }
    return novedad;
  }

  /** Recupera todas las novedades de un usuario, con filtro opcional por fechas. */
  async findAllForUser(firebaseUid: string, start?: string, end?: string) {
    const user = await this.prisma.user.findUnique({ where: { firebaseUid } });
    if (!user) throw new NotFoundException("Usuario no encontrado");

    const where: any = { userId: user.id.toString() };
    if (start || end) {
      where.timestamp = {};
      if (start) where.timestamp.gte = new Date(start);
      if (end) where.timestamp.lte = new Date(end);
    }

    return this.prisma.novedad.findMany({
      where,
      orderBy: { timestamp: "desc" },
    });
  }

  /** Devuelve todas las novedades sin filtrar. Solo accesible para Admin. */
  async findAllAdmin() {
    return this.prisma.novedad.findMany({
      orderBy: { timestamp: "desc" },
    });
  }
}
