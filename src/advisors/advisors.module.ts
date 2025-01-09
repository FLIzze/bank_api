import { Module } from '@nestjs/common';
import { AdvisorsService } from './advisors.service';
import { AdvisorsController } from './advisors.controller';
import { AdvisorsProviders } from './advisors.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [AdvisorsController],
    providers: [AdvisorsService, ...AdvisorsProviders],
    exports: [AdvisorsService],
})
export class AdvisorsModule {}
