import { Module } from "@nestjs/common";
import { PrismaModule } from "../database/prisma.module";
import { NovedadesController } from "./novedades.controller";
import { NovedadesService } from "./novedades.service";

@Module({
  imports: [PrismaModule],
  controllers: [NovedadesController],
  providers: [NovedadesService],
})
export class NovedadesModule {}
