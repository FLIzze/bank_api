import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { DatabaseModule } from './database/database.module';
import { AccountsModule } from './accounts/accounts.module';
import { CreditcardsModule } from './creditcards/creditcards.module';
import { ClientsController } from './clients/clients.controller';
import { AccountsController } from './accounts/accounts.controller';
import { CreditcardsController } from './creditcards/creditcards.controller';
import { TransfersModule } from './transfers/transfers.module';
import { TransfersController } from './transfers/transfers.controller';
import { LoansModule } from './loans/loans.module';
import { LoansController } from './loans/loans.controller';

@Module({
  imports: [DatabaseModule,ClientsModule, AccountsModule, CreditcardsModule, TransfersModule, LoansModule],
  controllers: [AppController, ClientsController, AccountsController, CreditcardsController, TransfersController, LoansController],
  providers: [AppService],
})

export class AppModule {}
