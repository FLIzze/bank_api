import { Controller, Post, Body } from '@nestjs/common';
import { ConvertService } from './convert.service';
import { ConvertDto } from './dto/convert.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from 'src/auth/public-strategy';

@ApiTags('Convert')
@Controller('api/convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Public()
  @Post()
  @ApiOperation({ summary: 'Convert one currency to another' })
  @ApiResponse({ status: 200, description: 'Conversion réussie.' })
  @ApiResponse({ status: 400, description: 'Invalid request.' })
  async convert(@Body() convertDto: ConvertDto): Promise<{ result: number }> {
    const result = await this.convertService.convertCurrency(convertDto);
    return { result };
  }
}