import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AdvisorsService } from './advisors.service';
import { AdvisorsController } from './advisors.controller';
import { AdvisorsProviders } from './advisors.providers';
import { DatabaseModule } from '../database/database.module';
import { ClientsModule } from 'src/clients/clients.module';

@Module({
        imports: [
                DatabaseModule,
                ClientsModule,
                forwardRef(() => AuthModule),
                ConfigModule,
        ],
        controllers: [AdvisorsController],
        providers: [AdvisorsService, ...AdvisorsProviders],
        exports: [AdvisorsService],
})
export class AdvisorsModule {}
