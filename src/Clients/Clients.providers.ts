import { Connection } from 'mongoose';
import { ClientsSchema } from './schemas/Clients.schema';

export const ClientsProviders = [
    {
        provide: 'CLIENTS_MODEL',
        useFactory: (connection:Connection) => connection.model('Clients', ClientsSchema),
        inject: ['BANK'],
    }
]