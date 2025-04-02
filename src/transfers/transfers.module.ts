import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';
import { DatabaseModule } from '../database/database.module';
import { TransfersProviders } from './transfers.providers';
import { AccountsModule } from 'src/accounts/accounts.module';

@Module({
        imports: [
                DatabaseModule,
                AccountsModule,
                forwardRef(() => AuthModule),
                ConfigModule,
        ],
        providers: [TransfersService, ...TransfersProviders],
        controllers: [TransfersController],
        exports: [TransfersService],
})
export class TransfersModule {}
