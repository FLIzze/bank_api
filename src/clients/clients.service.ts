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

    async findOne(clientId:string):Promise<Clients> {
        return this.clientsModel.findOne({clientId}).exec();
    }

    async update(clientId:string, CreateClientsDto:CreateClientsDto):Promise<Clients> {
        return this.clientsModel.findOneAndUpdate({clientId}, CreateClientsDto, {new:true}).exec();
    }

    async delete(clientId:string):Promise<Clients> {
        return this.clientsModel.findOneAndDelete({clientId}).exec();
    }

    async findAccounts(clientId:string):Promise<Clients> {
        return this.clientsModel.findOne({clientId}).populate('accounts').exec();
    }
}
