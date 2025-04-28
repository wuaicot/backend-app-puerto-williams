// server/src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import admin from "../config/firebase";
import { Role, Status } from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  private async verifyFirebaseToken(idToken: string) {
    return admin.auth().verifyIdToken(idToken);
  }

  /**
   * Registro de Conserje:
   * - Si no existe, crea User con status PENDING y role CONSERJE.
   * - Siempre genera una nueva CredentialRequest PENDING.
   */
  async registerUser(idToken: string) {
    const decoded: { uid: string; email?: string; name?: string } = await this.verifyFirebaseToken(idToken);
    const firebaseUid = decoded.uid;
    const email = decoded.email ?? "sin-email";
    const name = decoded.name ?? "Sin nombre";

    // 1) Crea o recupera el usuario
    let user = await this.prisma.user.findUnique({ where: { firebaseUid } });
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          firebaseUid,
          email,
          name,
          role: Role.CONSERJE,
          status: Status.PENDING,
        },
      });
    }

    // 2) Crea la solicitud de credencial
    await this.prisma.credentialRequest.create({
      data: {
        userId: user.id,
        desiredRole: Role.CONSERJE,
        status: Status.PENDING,
      },
    });

    return {
      id: user.id,
      role: user.role,
      status: user.status,
    };
  }

  /**
   * Login de Admin o Conserje aprobado:
   * - Si email === ALLOWED_ADMIN_EMAIL, hace upsert de Admin y devuelve sus datos.
   * - Si no, busca Conserje con status APPROVED.
   */
  async loginUser(idToken: string) {
    const decoded: { uid: string; email?: string; name?: string } = await this.verifyFirebaseToken(idToken);
    const firebaseUid = decoded.uid;
    const email = decoded.email ?? "";

    // Admin
    const allowedAdminEmail = process.env.ALLOWED_ADMIN_EMAIL!;
    if (email === allowedAdminEmail) {
      const adminUser = await this.prisma.user.upsert({
        where: { firebaseUid },
        create: {
          firebaseUid,
          email,
          name: decoded.name ?? "Admin",
          role: Role.ADMIN,
          status: Status.APPROVED,
        },
        update: {
          name: decoded.name,
          status: Status.APPROVED,
        },
      });
      return {
        id: adminUser.id,
        role: adminUser.role,
        status: adminUser.status,
      };
    }

    // Conserje aprobado
    const user = await this.prisma.user.findUnique({ where: { firebaseUid } });
    if (
      !user ||
      user.role !== Role.CONSERJE ||
      user.status !== Status.APPROVED
    ) {
      throw new UnauthorizedException(
        "Acceso denegado. Solo conserjes aprobados pueden ingresar.",
      );
    }
    return { id: user.id, role: user.role, status: user.status };
  }

  /**
   * Estado actual del usuario + razón si fue rechazado.
   */
  async getStatus(idToken: string) {
    const decoded = await this.verifyFirebaseToken(idToken);
    const firebaseUid = decoded.uid;
    const user = await this.prisma.user.findUnique({ where: { firebaseUid } });
    if (!user) throw new UnauthorizedException("Usuario no registrado.");

    // Última solicitud de este usuario
    const req = await this.prisma.credentialRequest.findFirst({
      where: { userId: user.id },
      orderBy: { submittedAt: "desc" },
    });

    return {
      status: user.status,
      role: user.role,
      reason: req?.status === Status.REJECTED ? req.reason : undefined,
    };
  }
}
