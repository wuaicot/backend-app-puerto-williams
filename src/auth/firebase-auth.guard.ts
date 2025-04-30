import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Request } from "express";

// Asegúrate de importar el default export:
import admin from "../config/firebase";

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Tipar req como any para acceder a headers
    const req = context.switchToHttp().getRequest<Request & { user?: any }>();
    const authHeader = req.headers?.authorization as string;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedException("Token missing");
    }
    const token = authHeader.split(" ")[1];

    try {
      // admin debe ser el default export de tu config/firebase
      const decoded = await admin.auth().verifyIdToken(token);
      req.user = { uid: decoded.uid, email: decoded.email };
      return true;
    } catch {
      throw new UnauthorizedException("Invalid token");
    }
  }
}
