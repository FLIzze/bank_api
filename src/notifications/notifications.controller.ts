import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Notifications } from './interfaces/notifications.interface';
import { NotificationsService } from './notifications.service';
import { createNotificationsDto } from './dto/create-notifications.dto';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly NotificationsService: NotificationsService) {}

    @Post()
    async create(@Body() createNotificationsDto: createNotificationsDto) {
        return this.NotificationsService.create(createNotificationsDto);
    }

    @Get(':clientId')
    async findOne(@Param('clientId') clientId: string) {
        return this.NotificationsService.findOne(clientId);
    }

    @Put(':clientId')
    async update(
        @Param('clientId') clientId: string,
        @Body() notification: Notifications
    ) {
        return this.NotificationsService.update(clientId, notification);
    }

}

