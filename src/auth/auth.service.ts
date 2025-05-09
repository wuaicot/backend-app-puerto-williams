// server/src/auth/auth.service.ts
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import admin from "../config/firebase";
import { Role, Status } from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  private async verifyFirebaseToken(
    idToken: string,
  ): Promise<{ uid: string; name?: string; email?: string }> {
    return admin.auth().verifyIdToken(idToken);
  }

  private async getUserByToken(idToken: string) {
    const decoded = await this.verifyFirebaseToken(idToken);
    const firebaseUid = decoded.uid;
    const user = await this.prisma.user.findUnique({ where: { firebaseUid } });
    if (!user) {
      throw new NotFoundException(
        "Usuario no conocido. ¿ya solicitó acceso a Administración?",
      );
    }
    return user;
  }

  /** Devuelve status y role para pantalla Pendiente/Aprobado */
  async getStatus(idToken: string) {
    const user = await this.getUserByToken(idToken);
    return {
      status: user.status,
      role: user.role,
    };
  }

  /** Registro inicial de usuario (solicitud de conserje) */
  async registerUser(idToken: string) {
    const decoded = await this.verifyFirebaseToken(idToken);
    const firebaseUid = decoded.uid;

    const existing = await this.prisma.user.findUnique({
      where: { firebaseUid },
    });
    if (existing) {
      return existing;
    }

    return this.prisma.user.create({
      data: {
        firebaseUid,
        name: decoded.name ?? "Sin nombre",
        email: decoded.email ?? "Sin email",
        role: Role.CONSERJE,
        status: Status.PENDING,
      },
    });
  }

  /** Login para Admin y Conserjes aprobados */
  async loginUser(idToken: string) {
    const decoded = await this.verifyFirebaseToken(idToken);
    const firebaseUid = decoded.uid;
    const email = decoded.email;
    const allowedAdminEmail = process.env.ALLOWED_ADMIN_EMAIL;

    if (email === allowedAdminEmail) {
      const adminUser = await this.prisma.user.upsert({
        where: { firebaseUid },
        create: {
          firebaseUid,
          name: decoded.name ?? "Admin",
          email: email!,
          role: Role.ADMIN,
          status: Status.APPROVED,
        },
        update: {
          name: decoded.name ?? "Sin nombre",
          status: Status.APPROVED,
        },
      });
      return adminUser;
    }

    const user = await this.prisma.user.findUnique({
      where: { firebaseUid },
    });
    if (!user || user.status !== Status.APPROVED) {
      throw new UnauthorizedException(
        "Acceso denegado. Solo usuarios aprobados pueden ingresar.",
      );
    }
    return user;
  }
}
