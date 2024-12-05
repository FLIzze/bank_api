import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientsProviders } from './clients.providers';
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