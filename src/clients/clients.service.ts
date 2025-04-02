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
        return this.clientsModel.create(CreateClientsDto);
    }

    async findall():Promise<Clients[]> {
        return this.clientsModel.find().exec();
    }

    async findOne(clientId:string):Promise<Clients> {
        return this.clientsModel.findOne({_id: clientId}).exec();
    }

    async update(clientId:string, CreateClientsDto:CreateClientsDto):Promise<Clients> {
        return this.clientsModel.findOneAndUpdate({_id: clientId}, CreateClientsDto, {new:true}).exec();
    }

    async delete(clientId:string):Promise<Clients> {
        return this.clientsModel.findOneAndDelete({_id: clientId}).exec();
    }

    async findOneBy(phone: string): Promise<Clients> {
        return this.clientsModel.findOne({ phone }).exec();
    }
}
