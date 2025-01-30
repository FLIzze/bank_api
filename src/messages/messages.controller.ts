import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessagesDto } from './dto/create-messages.dto';
import { Public } from 'src/auth/public-strategy';
import { ApiOperation } from '@nestjs/swagger';

@Controller('messages')
export class MessagesController {
    constructor(private readonly MessagesService: MessagesService) {}

    @Public()
    @ApiOperation({ summary: 'Create a new message' })
    @Post()
    async create(@Body() CreateMessagesDto:CreateMessagesDto) {
        return this.MessagesService.create(CreateMessagesDto);
    }

    @Public()
    @ApiOperation({ summary: 'Find all client messages' })
    @Get('client/:clientId')
    async findByClient(@Param('clientId') clientId: string) {
        return this.MessagesService.findByClient(clientId);
    }

    @Public()
    @ApiOperation({ summary: 'Find all advisor messages' })
    @Get('advisor/:advisorId')
    async findByAdvisor(@Param('advisorId') advisorId: string) {
        return this.MessagesService.findByAdvisor(advisorId);
    }

    @Public()
    @ApiOperation({ summary: 'Update a message' })
    @Put(':messageId')
    async update(@Param('messageId') messageId: string, @Body() CreateMessagesDto: CreateMessagesDto) {
        return this.MessagesService.update(messageId, CreateMessagesDto);
    }

    @Public()
    @ApiOperation({ summary: 'Delete a message' })
    @Delete(':messageId')
    async delete(@Param('messageId') messageId: string) {
        return this.MessagesService.delete(messageId);
    }
}
