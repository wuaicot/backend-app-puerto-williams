//server/src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import admin from "../config/firebase"
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

    // Verificar si el usuario ya existe
    const existing = await this.prisma.user.findUnique({
      where: { firebaseUid },
    });

    if (existing) {
      return existing; // Ya está registrado
    }

    // Crear nuevo usuario con status PENDING y rol CONSERJE
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

    const user = await this.prisma.user.findUnique({
      where: { firebaseUid },
    });

    // Validar que sea el único administrador permitido
    const allowedAdminEmail = process.env.ALLOWED_ADMIN_EMAIL;
    if (
      !user ||
      user.status !== Status.APPROVED ||
      user.role !== Role.ADMIN ||
      user.email !== allowedAdminEmail
    ) {
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
