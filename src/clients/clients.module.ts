import { Module, forwardRef } from '@nestjs/common';
import { ClientsProviders } from './clients.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
        imports: [
                DatabaseModule,
                forwardRef(() => AuthModule),
                ConfigModule,
        ],
        controllers: [
                ClientsController
        ],
        providers: [
                ClientsService,
                ...ClientsProviders,
        ],
        exports: [
                ClientsService
        ],
})

export class ClientsModule {}
