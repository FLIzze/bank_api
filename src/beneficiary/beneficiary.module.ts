import { Module } from '@nestjs/common';
import { BeneficiaryService } from './beneficiary.service';
import { BeneficiaryController } from './beneficiary.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [BeneficiaryService],
  controllers: [BeneficiaryController],
  exports: [BeneficiaryService],
})
export class BeneficiaryModule {}
