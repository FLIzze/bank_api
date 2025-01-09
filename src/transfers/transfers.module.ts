import { Module } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';
import { DatabaseModule } from '../database/database.module';
import { TransfersProviders } from './transfers.providers';

@Module({
  imports: [DatabaseModule],
  providers: [TransfersService, ...TransfersProviders],
  controllers: [TransfersController],
  exports: [TransfersService],
})
export class TransfersModule {}
