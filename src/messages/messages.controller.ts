import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessagesDto } from './dto/create-messages.dto';

@Controller('messages')
export class MessagesController {
    constructor(private readonly MessagesService: MessagesService) {}

    @Post()
    async create(@Body() CreateMessagesDto:CreateMessagesDto) {
        return this.MessagesService.create(CreateMessagesDto);
    }

    @Get('client/:clientId')
    async findByClient(@Param('clientId') clientId: string) {
        return this.MessagesService.findByClient(clientId);
    }

    @Get('advisor/:advisorId')
    async findByAdvisor(@Param('advisorId') advisorId: string) {
        return this.MessagesService.findByAdvisor(advisorId);
    }

    @Put(':messageId')
    async update(@Param('messageId') messageId: string, @Body() CreateMessagesDto: CreateMessagesDto) {
        return this.MessagesService.update(messageId, CreateMessagesDto);
    }
}
