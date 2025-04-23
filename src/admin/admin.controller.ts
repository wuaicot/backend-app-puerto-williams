import { Controller, Get, Patch, Param, Query, Body, NotFoundException } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { Role } from "@prisma/client";

@Controller("api/admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get("users")
  async getUsers(@Query("status") status: string) {
    return this.adminService.findUsersByStatus(status);
  }

  @Patch("users/:id/approve")
  async approveUser(
    @Param("id") userId: string,
    @Body("role") role: Role,
  ) {
    return this.adminService.approveUser(userId, role);
  }

  @Patch("users/:id/reject")
  async rejectUser(@Param("id") userId: string) {
    return this.adminService.rejectUser(userId);
  }
}
