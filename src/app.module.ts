import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './Clients/Clients.module';
import { DatabaseModule } from './database/database.module';
import { AccountsModule } from './accounts/accounts.module';
import { CreditcardsModule } from './creditcards/creditcards.module';
import { ClientsController } from './Clients/Clients.controller';
import { AccountsController } from './accounts/accounts.controller';
import { CreditcardsController } from './creditcards/creditcards.controller';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [DatabaseModule,ClientsModule, AccountsModule, CreditcardsModule, LoansModule],
  controllers: [AppController, ClientsController, AccountsController, CreditcardsController],
  providers: [AppService],
})

export class AppModule {}
