import { Module } from '@nestjs/common';
import { CreditcardsService } from './creditcards.service';
import { CreditcardsController } from './creditcards.controller';
import { creditcardsProviders } from './creditcards.providers';

@Module({
  controllers: [CreditcardsController],
  providers: [CreditcardsService, ...creditcardsProviders],
  exports: [CreditcardsService],
})
export class CreditcardsModule {}
