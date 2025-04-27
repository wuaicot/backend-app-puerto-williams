// server/src/admin/admin.service.ts
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { Role, Status } from "@prisma/client";

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  /** Listar usuarios por estado */
  async findUsersByStatus(status: string) {
    return this.prisma.user.findMany({
      where: { status: status as Status },
      orderBy: { createdAt: "desc" },
    });
  }

  /** Aprueba solicitud:
   * - Actualiza User (status, role)
   * - Marca la CredentialRequest más reciente como APPROVED
   */
  async approveUser(userId: string, role: Role) {
    // Verificar usuario
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuario no encontrado");

    // Actualizar usuario
    await this.prisma.user.update({
      where: { id: userId },
      data: { status: Status.APPROVED, role },
    });

    // Actualizar su última solicitud pendiente
    const req = await this.prisma.credentialRequest.findFirst({
      where: { userId, status: Status.PENDING },
      orderBy: { submittedAt: "desc" },
    });
    if (req) {
      await this.prisma.credentialRequest.update({
        where: { id: req.id },
        data: { status: Status.APPROVED },
      });
    }

    return { message: "Usuario aprobado correctamente" };
  }

  /** Rechaza solicitud:
   * - Actualiza User a REJECTED
   * - Actualiza CredentialRequest más reciente a REJECTED con razón
   */
  async rejectUser(userId: string, reason: string) {
    // Verificar usuario
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuario no encontrado");

    // Actualizar usuario
    await this.prisma.user.update({
      where: { id: userId },
      data: { status: Status.REJECTED },
    });

    // Actualizar su última solicitud pendiente
    const req = await this.prisma.credentialRequest.findFirst({
      where: { userId, status: Status.PENDING },
      orderBy: { submittedAt: "desc" },
    });
    if (req) {
      await this.prisma.credentialRequest.update({
        where: { id: req.id },
        data: { status: Status.REJECTED, reason },
      });
    }

    return { message: "Solicitud rechazada", reason };
  }
}
