import { Module } from '@nestjs/common';
import { ClientsController } from './Clients.controller';
import { ClientsService } from './Clients.service';
import { ClientsProviders } from './Clients.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [ClientsController],
    providers: [
        ClientsService,
        ...ClientsProviders,
    ],
    exports: [ClientsService],
})

export class ClientsModule {}