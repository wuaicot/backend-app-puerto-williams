import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { ShiftType } from "@prisma/client";

@Injectable()
export class NovedadesService {
  constructor(private prisma: PrismaService) {}

  /**
   * @param firebaseUid UID de Firebase extraído por el guard
   * @param description texto transcrito
   * @param entryMethod 'VOICE' | 'MANUAL'
   * @param isLast si marca fin de turno
   */
  async createNovedad(
    firebaseUid: string,
    description: string,
    entryMethod: string,
    isLast: boolean,
  ) {
    // 1) Creamos la novedad vinculada al usuario
    const novedad = await this.prisma.novedad.create({
      data: {
        description,
        entryMethod,
        user: {
          connect: { firebaseUid },
        },
      },
    });

    // 2) Si es último, creamos evento OUT; si no, podría ser IN
    if (isLast) {
      await this.prisma.shiftLog.create({
        data: {
          user: { connect: { firebaseUid } },
          type: ShiftType.OUT,
        },
      });
    }

    return novedad;
  }
}
