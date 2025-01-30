import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConvertDto {
  @ApiProperty({
    description: 'Montant à convertir',
    example: 100,
  })
  @IsNumber()
  readonly amount: number;

  @ApiProperty({
    description: 'Devise source',
    example: 'EUR',
  })
  @IsString()
  readonly from: string;

  @ApiProperty({
    description: 'Devise cible',
    example: 'USD',
  })
  @IsString()
  readonly to: string;
}