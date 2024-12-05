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
import { NotificationsModule } from './notifications/notifications.module';
import { MessagesModule } from './messages/messages.module';
import { AdvisorsModule } from './advisors/advisors.module';
import { LoansController } from './loans/loans.controller';
import { NotificationsController } from './notifications/notifications.controller';
import { MessagesController } from './messages/messages.controller';
import { AdvisorsController } from './advisors/advisors.controller';
import { BeneficiaryModule } from './beneficiary/beneficiary.module';
import { BeneficiaryController } from './beneficiary/beneficiary.controller';

@Module({
  imports: [DatabaseModule,
    ClientsModule, 
    AccountsModule, 
    CreditcardsModule, 
    LoansModule, 
    NotificationsModule, 
    MessagesModule, 
    AdvisorsModule, 
    TransfersModule, 
    BeneficiaryModule,
  ],
  controllers: [AppController, 
    ClientsController, 
    AccountsController, 
    CreditcardsController, 
    LoansController, 
    NotificationsController, 
    MessagesController, 
    AdvisorsController, 
    TransfersController,
    BeneficiaryController
  ],
  providers: [AppService],
})

export class AppModule {}
