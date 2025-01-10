import { Module } from '@nestjs/common';
import { ClientsProviders } from './clients.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';

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