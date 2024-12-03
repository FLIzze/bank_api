import { CreateClientsDto } from './dto/Create-Clients.dto';
import { ClientsService } from './Clients.service';
import { Clients } from './interfaces/Clients.interfaces';
export declare class ClientsController {
    private readonly ClientsService;
    constructor(ClientsService: ClientsService);
    create(CreateClientsDto: CreateClientsDto): Promise<Clients>;
    findAll(): Promise<Clients[]>;
}
