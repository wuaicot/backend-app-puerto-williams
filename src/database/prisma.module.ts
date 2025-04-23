import { Module, Global } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Global() // Hace que PrismaService esté disponible globalmente sin importar el módulo
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exporta PrismaService para que otros módulos puedan inyectarlo
})
export class PrismaModule {}
