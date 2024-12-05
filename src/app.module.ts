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
import { LoansModule } from './loans/loans.module';
import { NotificationsModule } from './notifications/notifications.module';
import { MessagesModule } from './messages/messages.module';
import { AdvisorsModule } from './advisors/advisors.module';

@Module({
  imports: [DatabaseModule,ClientsModule, AccountsModule, CreditcardsModule, LoansModule, NotificationsModule, MessagesModule, AdvisorsModule],
  controllers: [AppController, ClientsController, AccountsController, CreditcardsController],
  providers: [AppService],
})

export class AppModule {}
