import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { DatabaseModule } from '../database/database.module';
import { MessagesProviders } from './messages.providers';

@Module({
        imports: [
                DatabaseModule,
                forwardRef(() => AuthModule),
                ConfigModule,
        ],
        controllers: [MessagesController],
        providers: [MessagesService, ...MessagesProviders],
        exports: [MessagesService],
})
export class MessagesModule {}
