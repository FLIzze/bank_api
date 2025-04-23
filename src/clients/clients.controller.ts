import { Controller, Body, Get, Param, Put, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { Public } from '../auth/public-strategy';
import { CreateClientsDto } from './dto/create-clients.dto';
import { ClientsService } from './clients.service';
import { Clients } from './interfaces/clients.interfaces';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@Controller('clients')
export class ClientsController {
    constructor(private readonly ClientsService: ClientsService) { }

    @Public()
    @ApiOperation({ summary: 'Find all clients' })
    @Get()
    async findAll(): Promise<Clients[]> {
        return this.ClientsService.findall();
    }

    @Public()
    @ApiOperation({ summary: 'Find client by Id' })
    @Get(':clientId')
    async findOne(@Param('clientId') clientId: string): Promise<Clients> {
        return this.ClientsService.findOne(clientId);
    }

    @UseGuards(AuthGuard)
    @ApiOperation({ summary: 'Update a client' })
    @Put(':clientId')
    async update(@Param('clientId') clientId: string, @Body() CreateClientsDto: CreateClientsDto) {
        return this.ClientsService.update(clientId, CreateClientsDto);
    }

    @UseGuards(AuthGuard)
    @ApiOperation({ summary: 'Delete a client' })
    @Delete(':clientId')
    async delete(@Param('clientId') clientId: string) {
        return this.ClientsService.delete(clientId);
    }

    @Public()
    @ApiOperation({ summary: 'Find client by phone' })
    @Get('phone/:phone')
    async findOneBy(@Param('phone') phone: string): Promise<Clients> {
        const client = await this.ClientsService.findOneBy(phone);
        console.log(client);
        if (!client) {
            throw new NotFoundException(`Client with phone ${phone} not found`);
        }
        return client;
    }
}
