import { Controller, Post, Body } from '@nestjs/common';
import { ConvertService } from './convert.service';
import { ConvertDto } from './dto/convert.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Conversion de Monnaie')
@Controller('api/convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Post()
  @ApiOperation({ summary: 'Convertir une devise en une autre' })
  @ApiResponse({ status: 200, description: 'Conversion réussie.' })
  @ApiResponse({ status: 400, description: 'Requête invalide.' })
  async convert(@Body() convertDto: ConvertDto): Promise<{ result: number }> {
    const result = await this.convertService.convertCurrency(convertDto);
    return { result };
  }
}