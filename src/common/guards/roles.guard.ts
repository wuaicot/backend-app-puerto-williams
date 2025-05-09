//server/src/common/guards/roles.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../decorators/roles.decorator";
import { Request } from "express";

interface AuthenticatedRequest extends Request {
  user: { uid: string; email: string; role: string };
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) return true;

    const req = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const userRole = req.user.role;

    if (!requiredRoles.includes(userRole)) {
      throw new ForbiddenException("Permiso denegado");
    }
    return true;
  }
}
