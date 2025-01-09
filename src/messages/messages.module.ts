import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { DatabaseModule } from '../database/database.module';
import { MessagesProviders } from './messages.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [MessagesController],
    providers: [MessagesService, ...MessagesProviders],
    exports: [MessagesService],
})
export class MessagesModule {}
