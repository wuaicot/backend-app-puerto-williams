// server/src/auth/auth.controller.ts
import {
  Controller,
  Post,
  Get,
  Headers,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("api/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private extractToken(authHeader: string | undefined): string {
    if (!authHeader?.startsWith("Bearer ")) {
      throw new UnauthorizedException(
        "Authorization header missing or malformed",
      );
    }
    return authHeader.split(" ")[1];
  }

  /** POST /api/auth/register */
  @Post("register")
  async register(@Headers("Authorization") authHeader: string) {
    const token = this.extractToken(authHeader);
    return this.authService.registerUser(token);
  }

  /** POST /api/auth/login */
  @Post("login")
  async login(@Headers("Authorization") authHeader: string) {
    const token = this.extractToken(authHeader);
    return this.authService.loginUser(token);
  }

  /** GET /api/auth/status */
  @Get("status")
  async status(@Headers("Authorization") authHeader: string) {
    const token = this.extractToken(authHeader);
    return this.authService.getStatus(token);
  }
}
