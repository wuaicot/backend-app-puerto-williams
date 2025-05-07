import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Request } from "express";
import admin from "../config/firebase";
import { PrismaService } from "../database/prisma.service";

interface AuthenticatedRequest extends Request {
  user: { uid: string; email?: string; role: string };
}

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      throw new UnauthorizedException("Token missing");
    }
    const token = authHeader.split(" ")[1];

    try {
      const decoded = await admin.auth().verifyIdToken(token);

      // Buscamos al usuario en la BD para obtener su rol
      const user = await this.prisma.user.findUnique({
        where: { firebaseUid: decoded.uid },
      });
      if (!user) {
        throw new UnauthorizedException("User not registered");
      }

      // Adjuntamos uid, email (si existe) y role
      req.user = {
        uid: decoded.uid,
        email: decoded.email ?? undefined,
        role: user.role,
      };
      return true;
    } catch {
      throw new UnauthorizedException("Invalid token");
    }
  }
}
