// server/src/novedades/novedades.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
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

  /**
   * Ahora devuelve TODOS los registros (sin filtrar por usuario),
   * aplicando solo los parámetros start/end de query si vienen.
   */
  @Get()
  async findAll(
    @Req() req: AuthenticatedRequest,
    @Query("start") start?: string,
    @Query("end") end?: string,
  ) {
    return this.novedadesService.findAllForUser(
      req.user.uid, // sigue pasando el uid, pero el service ya lo ignora
      start,
      end,
    );
  }

  @Get("current-status")
  async getCurrentStatus(@Req() req: AuthenticatedRequest) {
    const status = await this.novedadesService.getCurrentTurnStatus(
      req.user.uid,
    );
    return { status };
  }

  @Get("current-duration")
  async getCurrentDuration(@Req() req: AuthenticatedRequest) {
    const minutes = await this.novedadesService.getCurrentShiftDuration(
      req.user.uid,
    );
    return { minutes };
  }
}
