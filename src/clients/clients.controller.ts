import {Controller, Body, Get, Post, Param, Put, Delete} from '@nestjs/common';
import { CreateClientsDto } from './dto/create-clients.dto';
import { ClientsService } from './clients.service';
import { Clients } from './interfaces/clients.interfaces';

@Controller('clients')
export class ClientsController {
    constructor(private readonly ClientsService:ClientsService) {}

    @Post()
    async create(@Body() CreateClientsDto:CreateClientsDto) {
        return this.ClientsService.create(CreateClientsDto);
    }

    @Get()
    async findAll():Promise<Clients[]> {
        return this.ClientsService.findall();
    }

    @Get(':clientId')
    async findOne(@Param('clientId') clientId:string):Promise<Clients> {
        return this.ClientsService.findOne(clientId);
    }

    @Put(':clientId')
    async update(@Param('clientId') clientId:string, @Body() CreateClientsDto:CreateClientsDto) {
        return this.ClientsService.update(clientId, CreateClientsDto);
    }

    @Delete(':clientId')
    async delete(@Param('clientId') clientId:string) {
        return this.ClientsService.delete(clientId);
    }

    @Get(':clientId/accounts')
    async findAccounts(@Param('clientId') clientId:string) {
        return this.ClientsService.findAccounts(clientId);
    }
}
