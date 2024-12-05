import { Module } from '@nestjs/common';
import { CreditcardsService } from './creditcards.service';
import { CreditcardsController } from './creditcards.controller';
import { CreditcardsProviders } from './creditcards.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CreditcardsController],
  providers: [CreditcardsService, ...CreditcardsProviders],
  exports: [CreditcardsService],
})
export class CreditcardsModule {}
