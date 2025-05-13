import { Module } from "@nestjs/common";
import { ConserjeriaService } from "./conserjeria.service";
import { MayordomoController } from "./mayordomo.controller";

@Module({
  providers: [ConserjeriaService],
  controllers: [MayordomoController],
})
export class ConserjeriaModule {}
