import {
  Controller,
  Post,
  Body,
  BadRequestException,
  UseGuards,
  Req,
} from "@nestjs/common";
import { NovedadesService } from "./novedades.service";
import { CreateNovedadDto } from "./dto/create-novedad.dto";
import { FirebaseAuthGuard } from "../auth/firebase-auth.guard";

@Controller("novedades") // /api/novedades gracias a setGlobalPrefix
@UseGuards(FirebaseAuthGuard) // Protege todos los endpoints de este controlador
export class NovedadesController {
  constructor(private readonly novedadesService: NovedadesService) {}

  @Post()
  async create(
    @Body() dto: CreateNovedadDto,
    @Req() req: { user: { uid: string } },
  ) {
    const { description, entryMethod, isLast } = dto;
    if (!description || !entryMethod) {
      throw new BadRequestException("description and entryMethod are required");
    }
    // Aquí obtenemos el Firebase UID desde el request
    const firebaseUid: string = req.user.uid;
    return this.novedadesService.createNovedad(
      firebaseUid,
      description,
      entryMethod,
      isLast,
    );
  }
}
