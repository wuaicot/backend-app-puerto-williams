// server/src/admin/admin.controller.ts
import {
  Controller,
  Get,
  Patch,
  Param,
  Query,
  Body,
  BadRequestException,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { Role } from "@prisma/client";

@Controller("admin") // rutas bajo /api/admin debido al prefijo global
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get("users")
  async getUsers(@Query("status") status: string) {
    return this.adminService.findUsersByStatus(status);
  }

  @Patch("users/:id/approve")
  async approveUser(@Param("id") userId: string, @Body("role") role: Role) {
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
}
