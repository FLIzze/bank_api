import {Controller, Body, Get, Post} from '@nestjs/common';
import { CreateClientsDto } from './dto/Create-Clients.dto';
import { ClientsService } from './Clients.service';
import { Clients } from './interfaces/Clients.interfaces';

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