import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { Role, Status } from "@prisma/client";

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async findUsersByStatus(status: string) {
    return this.prisma.user.findMany({
      where: { status: status as Status },
      orderBy: { createdAt: "desc" },
    });
  }

  async approveUser(userId: string, role: Role) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuario no encontrado");

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        status: "APPROVED",
        role,
      },
    });
  }

  async rejectUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuario no encontrado");

    return this.prisma.user.update({
      where: { id: userId },
      data: { status: "REJECTED" },
    });
  }
}
