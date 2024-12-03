import { Model } from 'mongoose';
import { Clients } from './interfaces/Clients.interfaces';
import { CreateClientsDto } from './dto/Create-Clients.dto';
export declare class ClientsService {
    private clientsModel;
    constructor(clientsModel: Model<Clients>);
    create(CreateClientsDto: CreateClientsDto): Promise<Clients>;
    findall(): Promise<Clients[]>;
}
