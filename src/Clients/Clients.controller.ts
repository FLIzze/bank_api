import {Controller, Body, Get, Post} from '@nestjs/common';
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
}