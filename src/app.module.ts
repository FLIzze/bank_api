import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './Clients/Clients.module';
import { DatabaseModule } from './database/database.module';
import { ClientsController } from './Clients/Clients.controller';

@Module({
  imports: [DatabaseModule,ClientsModule],
  controllers: [AppController, ClientsController],
  providers: [AppService],
})

export class AppModule {}
