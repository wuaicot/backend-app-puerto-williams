// server/src/main.ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefijo global “/api” para todos los controllers
  app.setGlobalPrefix("api");

  app.enableCors({
    origin: "http://localhost:3000",
  });

  await app.listen(4000);
  console.log("Backend corriendo en http://localhost:4000");
}
bootstrap().catch((error) => {
  console.error("Error during application bootstrap:", error);
});
