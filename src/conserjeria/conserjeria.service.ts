import { Injectable } from '@nestjs/common';

@Injectable()
export class ConserjeriaService {
  /** Simula las tareas asignadas al Mayordomo */
  getMayordomoTasks(): string[] {
    return [
      'Revisar reportes de turno',
      'Aprobar nuevas solicitudes',
      'Coordinar mantenimientos',
      'Generar informe semanal',
      'Contactar al administrador',
    ];
  }
}
