//server/src/auth/auth.controller.ts
import {
  Controller,
  Post,
  Body,
  Headers,
  UnauthorizedException,
  Req,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from "express"; // Importar Request de express

@Controller("api/auth") // Define el prefijo de ruta base para este controlador (ej: /api/auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Endpoint para el registro
  @Post("register")
  async register(
    @Headers("Authorization") authHeader: string,
    @Req() req: Request,
  ) {
    console.log("AuthController: POST /register llamado");
    console.log("Headers:", req.headers); // Log para ver qué headers llegan

    // Extraer el token del header 'Authorization: Bearer <token>'
    const token = authHeader?.split(" ")[1];

    if (!token) {
      console.error("Token no encontrado en el header Authorization");
      throw new UnauthorizedException(
        "Authorization header missing or malformed",
      );
    }

    try {
      return await this.authService.registerUser(token);
    } catch (error) {
      console.error("Error en AuthController register:", error);
      // Re-lanzar o manejar el error apropiadamente
      throw error;
    }
  }

  // Endpoint para el login (Admin y Conserje)
  @Post("login")
  async login(
    @Headers("Authorization") authHeader: string,
    @Req() req: Request,
  ): Promise<{ accessToken: string }> {
    console.log("AuthController: POST /login llamado");
    console.log("Headers:", req.headers); // Log para ver qué headers llegan

    // Extraer el token del header 'Authorization: Bearer <token>'
    const token = authHeader?.split(" ")[1];

    if (!token) {
      console.error("Token no encontrado en el header Authorization");
      throw new UnauthorizedException(
        "Authorization header missing or malformed",
      );
    }

    try {
      // Llama al servicio para manejar el login
      return await this.authService.loginUser(token);
    } catch (error) {
      console.error("Error en AuthController login:", error);
      // Re-lanzar o manejar el error apropiadamente
      throw error;
    }
  }
}
