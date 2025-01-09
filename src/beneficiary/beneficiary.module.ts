import { Module } from '@nestjs/common';
import { BeneficiaryService } from './beneficiary.service';
import { BeneficiaryController } from './beneficiary.controller';
import { DatabaseModule } from '../database/database.module';
import { BeneficiaryProviders } from './beneficiary.providers';

@Module({
  imports: [DatabaseModule],
  providers: [BeneficiaryService, ...BeneficiaryProviders],
  controllers: [BeneficiaryController],
  exports: [BeneficiaryService],
})
export class BeneficiaryModule {}
