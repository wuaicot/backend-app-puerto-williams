import {
  Controller,
  Get,
  Patch,
  Param,
  Query,
  Body,
  BadRequestException,
  UseGuards,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { Role } from "@prisma/client";
import { FirebaseAuthGuard } from "../auth/firebase-auth.guard";
import { Roles } from "../common/decorators/roles.decorator";
import { RolesGuard } from "../common/guards/roles.guard";
import { NovedadesService } from "../novedades/novedades.service";

@Controller("admin") // rutas bajo /api/admin por el prefijo global
@UseGuards(FirebaseAuthGuard, RolesGuard)
@Roles("ADMIN")
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly novedadesService: NovedadesService,
  ) {}

  @Get("users")
  async getUsers(@Query("status") status: string) {
    return this.adminService.findUsersByStatus(status);
  }

  @Patch("users/:id/approve")
  async approveUser(
    @Param("id") userId: string,
    @Body("role") role: Role,
  ) {
    if (!role) {
      throw new BadRequestException('El campo "role" es requerido.');
    }
    return this.adminService.approveUser(userId, role);
  }

  @Patch("users/:id/reject")
  async rejectUser(
    @Param("id") userId: string,
    @Body("reason") reason: string,
  ) {
    if (!reason) {
      throw new BadRequestException('El campo "reason" es requerido.');
    }
    return this.adminService.rejectUser(userId, reason);
  }

  /** Devuelve todas las novedades (incidencias) a nivel global para Admin */
  @Get("incidencias")
  async getAllIncidencias() {
    return this.novedadesService.findAllAdmin();
  }
}
