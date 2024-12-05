import { Module } from '@nestjs/common';
import { AdvisorsService } from './advisors.service';
import { AdvisorsController } from './advisors.controller';

@Module({
  providers: [AdvisorsService],
  controllers: [AdvisorsController]
})
export class AdvisorsModule {}
