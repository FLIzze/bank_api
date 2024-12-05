import { Module } from '@nestjs/common';
import { AdvisorsService } from './advisors.service';
import { AdvisorsController } from './advisors.controller';
import { AdvisorsProviders } from './advisors.providers';

@Module({
    imports: [AdvisorsModule],
    controllers: [AdvisorsController],
    providers: [AdvisorsService, ...AdvisorsProviders],
    exports: [AdvisorsService],
})
export class AdvisorsModule {}
