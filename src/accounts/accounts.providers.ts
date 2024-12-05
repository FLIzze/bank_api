import { Connection } from 'mongoose';
import { AccountsSchema } from './schemas/accounts.schema';

export const AccountsProviders = [
    {
        provide: 'ACCOUNTS_MODEL',
        useFactory: (connection: Connection) =>
        connection.model('Accounts', AccountsSchema),
        inject: ['BANK'],
    },
];
