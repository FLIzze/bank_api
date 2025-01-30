import { Module } from '@nestjs/common';
import { CreditcardsService } from './creditcards.service';
import { CreditcardsController } from './creditcards.controller';
import { CreditcardsProviders } from './creditcards.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CreditcardsService, ...CreditcardsProviders],
  controllers: [CreditcardsController],
  exports: [CreditcardsService],
})
export class CreditcardsModule {}
