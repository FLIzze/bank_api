import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { DatabaseModule } from '../database/database.module';
import { LoansProviders } from './loans.providers';

@Module({
        imports: [
                DatabaseModule,
                forwardRef(() => AuthModule),
                        ConfigModule,
        ],
        controllers: [LoansController],
        providers: [LoansService, ...LoansProviders],
        exports: [LoansService],
})
export class LoansModule {}
