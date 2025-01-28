import {Controller, Body, Get, Post, Param, Put, Delete} from '@nestjs/common';
import { CreateClientsDto } from './dto/create-clients.dto';
import { ClientsService } from './clients.service';
import { Clients } from './interfaces/clients.interfaces';
import { Public } from 'src/auth/public-strategy';
import { ApiOperation } from '@nestjs/swagger';

@Controller('clients')
export class ClientsController {
    constructor(private readonly ClientsService:ClientsService) {}

    @Public()
    @ApiOperation({ summary: 'Find all clients' })
    @Get()
    async findAll():Promise<Clients[]> {
        return this.ClientsService.findall();
    }

    @Public()
    @ApiOperation({ summary: 'Find client by Id' })
    @Get(':clientId')
    async findOne(@Param('clientId') clientId:string):Promise<Clients> {
        return this.ClientsService.findOne(clientId);
    }

    @Public()
    @ApiOperation({ summary: 'Update a client' })
    @Put(':clientId')
    async update(@Param('clientId') clientId:string, @Body() CreateClientsDto:CreateClientsDto) {
        return this.ClientsService.update(clientId, CreateClientsDto);
    }

    @Public()
    @ApiOperation({ summary: 'Delete a client' })
    @Delete(':clientId')
    async delete(@Param('clientId') clientId:string) {
        return this.ClientsService.delete(clientId);
    }
}
