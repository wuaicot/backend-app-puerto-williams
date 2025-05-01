// server/src/app.module.ts
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./database/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { AdminModule } from "./admin/admin.module";
import { NovedadesModule } from "./novedades/novedades.module"; // <-- Correcto

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    AdminModule,
    NovedadesModule, // <-- Correcto
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
