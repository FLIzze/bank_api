import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { NotificationsProviders } from './notifications.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
        imports: [
                DatabaseModule,
                forwardRef(() => AuthModule),
                ConfigModule,
        ],
        providers: [NotificationsService, ...NotificationsProviders],
        controllers: [NotificationsController],
        exports: [NotificationsService],
})
export class NotificationsModule {}
