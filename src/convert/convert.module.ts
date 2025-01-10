import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConvertService } from './convert.service';
import { ConvertController } from './convert.controller';

@Module({
  imports: [HttpModule],
  providers: [ConvertService],
  controllers: [ConvertController],
  exports: [ConvertService],
})
export class ConvertModule {}