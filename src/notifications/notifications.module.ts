import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { NotificationsProviders } from './notifications.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [NotificationsService, ...NotificationsProviders],
    controllers: [NotificationsController],
    exports: [NotificationsService],
})
export class NotificationsModule {}
