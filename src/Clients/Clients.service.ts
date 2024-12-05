import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Clients } from './interfaces/clients.interfaces';
import { CreateClientsDto } from './dto/create-clients.dto';

@Injectable()
export class ClientsService {
    constructor(
        @Inject('CLIENTS_MODEL')
        private clientsModel: Model<Clients>
    ) {}

    async create(CreateClientsDto:CreateClientsDto):Promise<Clients> {
        const createdClient = new this.clientsModel(CreateClientsDto);
        return createdClient.save();
    }

    async findall():Promise<Clients[]> {
        return this.clientsModel.find().exec();
    }
}