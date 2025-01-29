import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Notifications } from './interfaces/notifications.interface';
import { NotificationsService } from './notifications.service';
import { createNotificationsDto } from './dto/create-notifications.dto';
import { Public } from 'src/auth/public-strategy';
import { ApiOperation } from '@nestjs/swagger';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly NotificationsService: NotificationsService) {}

    @Public()
    @ApiOperation({ summary: 'Create a notification' })
    @Post()
    async create(@Body() createNotificationsDto: createNotificationsDto) {
        return this.NotificationsService.create(createNotificationsDto);
    }

    @Public()
    @ApiOperation({ summary: 'Find all notifications' })
    @Get(':clientId')
    async findAllByClientId(@Param('clientId') clientId: string) {
        return this.NotificationsService.findAllByClientId(clientId);
    }

    @Public()
    @ApiOperation({ summary: 'Update a notification' })
    @Put(':notificationId')
    async update(@Param('notificationId') notificationId: string, @Body() createNotificationsDto: createNotificationsDto) {
        return this.NotificationsService.update(notificationId, createNotificationsDto);
    }

    @Public()
    @ApiOperation({ summary: 'Delete a notification' })
    @Delete(':notificationId')
    async delete(@Param('notificationId') notificationId: string) {
        return this.NotificationsService.delete(notificationId);
    }

}

