import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { ConfigModule } from "@nestjs/config"; // Necesario para que AuthService use ConfigService
// Importa otros módulos necesarios (UsersModule, PrismaModule) cuando existan
// import { UsersModule } from '../users/users.module';
// import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    ConfigModule, // Importar ConfigModule si AuthService lo necesita
    // PrismaModule, // Importar si AuthService necesita PrismaService
    // UsersModule,  // Importar si AuthService necesita UsersService
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService], // Exportar AuthService si otros módulos lo necesitan
})
export class AuthModule {}
