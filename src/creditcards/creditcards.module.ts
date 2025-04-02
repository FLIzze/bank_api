import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CreditcardsService } from './creditcards.service';
import { CreditcardsController } from './creditcards.controller';
import { CreditcardsProviders } from './creditcards.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
        imports: [
                DatabaseModule,
                forwardRef(() => AuthModule),
                ConfigModule,
        ],
        providers: [CreditcardsService, ...CreditcardsProviders],
        controllers: [CreditcardsController],
        exports: [CreditcardsService],
})
export class CreditcardsModule {}
