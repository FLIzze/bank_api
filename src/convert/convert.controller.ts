import { Controller, Post, Body } from '@nestjs/common';
import { ConvertService } from './convert.service';
import { ConvertDto } from './dto/convert.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Convert')
@Controller('api/convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Post()
  @ApiOperation({ summary: 'Convert one currency to another' })
  @ApiResponse({ status: 200, description: 'Conversion réussie.' })
  @ApiResponse({ status: 400, description: 'Invalid request.' })
  async convert(@Body() convertDto: ConvertDto): Promise<{ result: number }> {
    const result = await this.convertService.convertCurrency(convertDto);
    return { result };
  }
}