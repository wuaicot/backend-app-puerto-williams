import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
//import { FirebaseAuthGuard } from "../auth/firebase-auth.guard";
//import { RolesGuard } from "../common/guards/roles.guard";
import { NovedadesModule } from "../novedades/novedades.module";

@Module({
  imports: [
    NovedadesModule, // <-- Importamos el módulo que exporta NovedadesService
  ],
  controllers: [AdminController],
  providers: [
    AdminService,
    // No necesitas volver a proveer NovedadesService, ya viene de NovedadesModule
  ],
})
export class AdminModule {}
