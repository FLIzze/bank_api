import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountsProviders } from './accounts.providers';
import { CreditcardsModule } from '../creditcards/creditcards.module';
import { DatabaseModule } from '../database/database.module';

@Module({
        imports: [
                DatabaseModule,
                CreditcardsModule,
                forwardRef(() => AuthModule),
                        ConfigModule,
        ],
        controllers: [AccountsController],
        providers: [AccountsService, ...AccountsProviders],
        exports: [AccountsService],
})
export class AccountsModule {}
