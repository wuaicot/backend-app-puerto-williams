// server/src/admin/admin.module.ts
import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { AuthModule } from "../auth/auth.module";
import { PrismaModule } from "../database/prisma.module";
import { NovedadesModule } from "../novedades/novedades.module";

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    NovedadesModule, // Importamos el módulo que exporta NovedadesService
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
