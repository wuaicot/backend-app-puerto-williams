// server/src/novedades/novedades.controller.ts
import { Controller, Get, Post, Body, Req, UseGuards } from "@nestjs/common";
import { NovedadesService } from "./novedades.service";
import { FirebaseAuthGuard } from "../auth/firebase-auth.guard";
import { CreateNovedadDto } from "./dto/create-novedad.dto";
import { Request } from "express";

interface AuthenticatedRequest extends Request {
  user: { uid: string };
}

@Controller("novedades")
@UseGuards(FirebaseAuthGuard)
export class NovedadesController {
  constructor(private readonly novedadesService: NovedadesService) {}

  @Post()
  async create(
    @Req() req: AuthenticatedRequest,
    @Body() dto: CreateNovedadDto,
  ) {
    return this.novedadesService.createNovedad(
      req.user.uid,
      dto.description,
      dto.entryMethod,
      dto.isLast,
    );
  }

  /** Devuelve todos los registros como un libro global */
  @Get()
  async findAll() {
    return this.novedadesService.findAllAdmin();
  }

  /** Estado actual del turno para el usuario autenticado */
  @Get("current-status")
  async getCurrentStatus(@Req() req: AuthenticatedRequest) {
    const { status, sessionStart } =
      await this.novedadesService.getCurrentTurnStatus(req.user.uid);
    return {
      status,
      sessionStart: sessionStart?.toISOString() ?? null,
    };
  }

  /** Duración en minutos del turno actual */
  @Get("current-duration")
  async getCurrentDuration(@Req() req: AuthenticatedRequest) {
    const minutes = await this.novedadesService.getCurrentShiftDuration(
      req.user.uid,
    );
    return { minutes };
  }
}
