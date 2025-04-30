// server/src/novedades/dto/create-novedad.dto.ts

export class CreateNovedadDto {
  description!: string;
  entryMethod!: "VOICE" | "MANUAL";
  isLast!: boolean;
}
