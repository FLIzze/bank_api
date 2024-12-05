import { Connection } from 'mongoose';
import { TransfersSchema } from './schemas/transfers.schema';

export const TransfersProviders = [
  {
    provide: 'TRANSFERS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Transfers', TransfersSchema),
    inject: ['BANK'],
  },
];
