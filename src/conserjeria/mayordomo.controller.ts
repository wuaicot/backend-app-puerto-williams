import { Controller, Get, UseGuards } from '@nestjs/common';
import { ConserjeriaService } from './conserjeria.service';
import { FirebaseAuthGuard } from '../auth/firebase-auth.guard';

@Controller('conserjeria/mayordomo')
@UseGuards(FirebaseAuthGuard)
export class MayordomoController {
  constructor(private readonly conserjeriaService: ConserjeriaService) {}

  /** Devuelve la lista de tareas para el Mayordomo */
  @Get()
  getTasks(): string[] {
    return this.conserjeriaService.getMayordomoTasks();
  }
}
