import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { BeneficiaryService } from './beneficiary.service';
import { BeneficiaryController } from './beneficiary.controller';
import { DatabaseModule } from '../database/database.module';
import { BeneficiaryProviders } from './beneficiary.providers';

@Module({
        imports: [
                DatabaseModule,
                forwardRef(() => AuthModule),
                ConfigModule,
        ],
        providers: [BeneficiaryService, ...BeneficiaryProviders],
        controllers: [BeneficiaryController],
        exports: [BeneficiaryService],
})
export class BeneficiaryModule {}
