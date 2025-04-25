import { Module } from "@nestjs/common";
import { AdminModule } from "./admin/admin.module";
import { PrismaModule } from "./database/prisma.module";
import { AuthModule } from "./auth/auth.module"; // ✅ importa AuthModule

@Module({
  imports: [
    PrismaModule,
    AdminModule,
    AuthModule, // ✅ incluye AuthModule
  ],
})
export class AppModule {}
