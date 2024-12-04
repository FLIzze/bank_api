import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './Clients/Clients.module';
import { DatabaseModule } from './database/database.module';
import { ClientsController } from './Clients/Clients.controller';
import { CreditCardsModule } from './CreditCards/CreditCards.module';
import { CreditCardsController } from './CreditCards/CreditCards.controller';
import { ClientsService } from './Clients/Clients.service';
import { CreditCardsService } from './CreditCards/CreditCards.service';

@Module({
  imports: [DatabaseModule,ClientsModule, CreditCardsModule],
  controllers: [AppController, ClientsController, CreditCardsController],
  providers: [AppService],
})

export class AppModule {}
