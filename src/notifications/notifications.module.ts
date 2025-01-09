import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { NotificationsProviders } from './notifications.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [NotificationsModule, DatabaseModule],
    controllers: [NotificationsController],
    providers: [NotificationsService, ...NotificationsProviders],
    exports: [NotificationsService],
})
export class NotificationsModule {}
