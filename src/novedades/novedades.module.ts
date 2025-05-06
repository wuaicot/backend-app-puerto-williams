import { Module } from "@nestjs/common";
import { PrismaModule } from "../database/prisma.module";
import { NovedadesService } from "./novedades.service";
import { NovedadesController } from "./novedades.controller";

@Module({
  imports: [PrismaModule],
  providers: [NovedadesService],
  controllers: [NovedadesController],
  exports: [NovedadesService], // <-- Exportamos el servicio
})
export class NovedadesModule {}
