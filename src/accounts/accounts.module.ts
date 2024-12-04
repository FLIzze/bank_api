import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { accountsProviders } from './accounts.providers';
import { CreditcardsModule } from '../creditcards/creditcards.module';

@Module({
  imports: [CreditcardsModule],
  controllers: [AccountsController],
  providers: [AccountsService, ...accountsProviders],
  exports: [AccountsService],
})
export class AccountsModule {}
