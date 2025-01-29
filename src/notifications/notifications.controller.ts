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
    async findOne(@Param('clientId') clientId: string) {
        return this.NotificationsService.findOne(clientId);
    }

    @Public()
    @ApiOperation({ summary: 'Update a notification' })
    @Put(':clientId')
    async update(
        @Param('clientId') clientId: string,
        @Body() notification: Notifications
    ) {
        return this.NotificationsService.update(clientId, notification);
    }

    @Public()
    @ApiOperation({ summary: 'Delete a notification' })
    @Delete(':clientId')
    async delete(@Param('clientId') clientId: string) {
        return this.NotificationsService.delete(clientId);
    }

}

