import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { DatabaseModule } from 'src/database/database.module';
import { LoansProviders } from './loans.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [LoansController],
  providers: [LoansService, ...LoansProviders],
  exports: [LoansService],
})
export class LoansModule {}
