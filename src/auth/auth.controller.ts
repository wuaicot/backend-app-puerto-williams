import {
  Controller,
  Post,
  Get,
  Headers,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthService } from "./auth.service";

export class CreateNovedadDto {
  description!: string;
  entryMethod!: "VOICE" | "MANUAL";
  isLast!: boolean;
}

@Controller("auth") // con setGlobalPrefix('api') queda /api/auth
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Headers("Authorization") authHeader: string) {
    const token = this.extractToken(authHeader);
    if (!token) {
      throw new UnauthorizedException(
        "Authorization header missing or malformed",
      );
    }
    return this.authService.registerUser(token);
  }

  @Post("login")
  async login(@Headers("Authorization") authHeader: string) {
    const token = this.extractToken(authHeader);
    if (!token) {
      throw new UnauthorizedException(
        "Authorization header missing or malformed",
      );
    }
    return this.authService.loginUser(token);
  }

  @Get("status")
  async status(@Headers("Authorization") authHeader: string) {
    const token = this.extractToken(authHeader);
    if (!token) {
      throw new UnauthorizedException(
        "Authorization header missing or malformed",
      );
    }
    return this.authService.getStatus(token);
  }

  private extractToken(authHeader: string | undefined): string | null {
    if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
    return authHeader.split(" ")[1];
  }
}
