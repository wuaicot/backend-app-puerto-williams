// server/src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
// Una vez que la importación funcione, la extensión 'extends PrismaClient' será válida
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      // Opcional: configuraciones de Prisma Client (ej: logging)
      // log: ['query', 'info', 'warn', 'error'],
    });
    console.log("PrismaService constructor called."); // Log para verificar instanciación
  }

  async onModuleInit() {
    try {
      // Intenta conectar a la base de datos cuando el módulo se inicializa
      await this.$connect();
      console.log("Prisma connected to database successfully.");
    } catch (error) {
      console.error("Failed to connect to the database:", error);
    }
  }

  async onModuleDestroy() {
    // Cierra la conexión a la base de datos cuando la aplicación se apaga
    await this.$disconnect();
    console.log("Prisma disconnected from database.");
  }

  // Opcional: Método para limpieza de DB en tests (ejemplo)
  /*
  async cleanDatabase() {
    // Cuidado: Borra datos en orden para evitar errores de restricción de FK
    // Asegúrate que los nombres de modelos coincidan exactamente con tu schema.prisma
    if (this.novedad && typeof this.novedad.deleteMany === 'function') {
       await this.novedad.deleteMany();
    }
    if (this.shiftLog && typeof this.shiftLog.deleteMany === 'function') {
       await this.shiftLog.deleteMany();
    }
    if (this.credentialRequest && typeof this.credentialRequest.deleteMany === 'function') {
       await this.credentialRequest.deleteMany();
    }
     if (this.user && typeof this.user.deleteMany === 'function') {
       await this.user.deleteMany();
    }
    console.log('Database cleaned (if models exist).');
  }
  */
}