import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountsProviders } from './accounts.providers';
import { CreditcardsModule } from '../creditcards/creditcards.module';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [CreditcardsModule, DatabaseModule],
    controllers: [AccountsController],
    providers: [AccountsService, ...AccountsProviders],
    exports: [AccountsService],
})
export class AccountsModule {}
