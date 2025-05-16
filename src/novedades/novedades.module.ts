// server/src/novedades/novedades.module.ts

import { Module } from "@nestjs/common";
import { PrismaModule } from "../database/prisma.module";
import { NovedadesService } from "./novedades.service";
import { NovedadesController } from "./novedades.controller";

@Module({
  imports: [PrismaModule],
  providers: [NovedadesService],
  controllers: [NovedadesController],
  exports: [NovedadesService], // <-- Hacemos disponible el servicio para otros módulos
})
export class NovedadesModule {}
