// server/src/main.ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefijo global “/api” para todos los controllers
  app.setGlobalPrefix("api");

  app.enableCors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Usar variable de entorno es mejor
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", // OPTIONS suele ser necesario
  });

  // Descomenta para habilitar validación automática basada en DTOs y class-validator
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true, // Ignora propiedades no definidas en el DTO
  //   forbidNonWhitelisted: true, // Lanza error si vienen propiedades no definidas
  //   transform: true, // Transforma el payload al tipo del DTO (e.g., string a number si aplica)
  //   transformOptions: {
  //     enableImplicitConversion: true, // Permite conversión implícita basado en tipos TS
  //   },
  // }));

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`Backend corriendo en http://localhost:${port}`);
}

bootstrap().catch((error) => {
  console.error("Error fatal durante el bootstrap de la aplicación:", error);
  process.exit(1); // Salir si el arranque falla
});
