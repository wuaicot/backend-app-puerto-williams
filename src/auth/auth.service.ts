// server/src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import admin from "../config/firebase";
import { Role, Status } from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async verifyFirebaseToken(idToken: string) {
    return admin.auth().verifyIdToken(idToken);
  }

  async registerUser(idToken: string) {
    const decoded = await this.verifyFirebaseToken(idToken);
    const firebaseUid = decoded.uid;

    // Verificar si ya existe
    const existing = await this.prisma.user.findUnique({
      where: { firebaseUid },
    });
    if (existing) return existing;

    // Crear nuevo conserje PENDING
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

  async loginUser(idToken: string) {
    const decoded = await this.verifyFirebaseToken(idToken);
    const firebaseUid = decoded.uid;
    const email = decoded.email;

    const allowedAdminEmail = process.env.ALLOWED_ADMIN_EMAIL;
    if (email === allowedAdminEmail) {
      // Upsert: si no existe, lo crea; si existe, actualiza (aunque no haya cambios)
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
          // Podrías actualizar nombre si cambió en Google
          name: decoded.name,
          status: Status.APPROVED,
        },
      });
      return {
        id: adminUser.id,
        name: adminUser.name,
        email: adminUser.email,
        role: adminUser.role,
        status: adminUser.status,
      };
    }

    // Para conserjes (cuando implementes su login)
    const user = await this.prisma.user.findUnique({
      where: { firebaseUid },
    });
    if (!user || user.status !== Status.APPROVED || user.role !== Role.CONSERJE) {
      throw new UnauthorizedException(
        "Acceso denegado. Solo el administrador autorizado puede ingresar.",
      );
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    };
  }
}
