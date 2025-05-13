import { Module } from "@nestjs/common";
import { ConserjeriaService } from "../conserjeria/conserjeria.service";
import { MayordomoController } from "../conserjeria/mayordomo.controller";

@Module({
  providers: [ConserjeriaService],
  controllers: [MayordomoController],
})
export class ConserjeriaModule {}
