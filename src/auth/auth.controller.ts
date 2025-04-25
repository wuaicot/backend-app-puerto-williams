//server/src/auth/auth.controller.ts
import {
  Controller,
  Post,
  Headers,
  UnauthorizedException,
  Req,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from "express"; // ✅ Import necesario para usar Request

@Controller("api/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * POST /api/auth/register
   * Registra un usuario nuevo si no existe
   */
  @Post("register")
  async register(@Headers("Authorization") authHeader: string) {
    console.log("AuthController: POST /register llamado");

    const token = this.extractToken(authHeader);
    if (!token) {
      console.error("Token no encontrado en el header Authorization");
      throw new UnauthorizedException(
        "Authorization header missing or malformed",
      );
    }

    try {
      const user = await this.authService.registerUser(token);
      console.log("Usuario registrado/existente:", user.email);
      return user;
    } catch (error) {
      console.error("Error en AuthController register:", error);
      throw error;
    }
  }

  /**
   * POST /api/auth/login
   * Login para Admin o Conserjes aprobados
   */
  @Post("login")
  async login(
    @Headers("Authorization") authHeader: string,
    @Req() req: Request,
  ) {
    console.log("AuthController: POST /login llamado");

    const token = this.extractToken(authHeader);
    if (!token) {
      console.error("Token no encontrado en el header Authorization");
      throw new UnauthorizedException(
        "Authorization header missing or malformed"
      );
    }

    try {
      const user = await this.authService.loginUser(token);
      console.log("Login exitoso para:", user.email);
      return user;
    } catch (error) {
      console.error("Error en AuthController login:", error);
      throw error;
    }
  }

  /**
   * Extrae el token Bearer del header
   */
  private extractToken(authHeader: string | undefined): string | null {
    if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
    return authHeader.split(" ")[1];
  }
}
