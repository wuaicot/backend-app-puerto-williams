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

  @Get()
  async findAll(
    @Req() req: AuthenticatedRequest,
    @Query("start") start?: string,
    @Query("end") end?: string,
  ) {
    return this.novedadesService.findAllForUser(req.user.uid, start, end);
  }
}
