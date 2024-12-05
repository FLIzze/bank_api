import { Connection } from 'mongoose';
import { CreditcardsSchema } from './schemas/creditcards.schema';

export const CreditcardsProviders = [
  {
    provide: 'CREDITCARDS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('CreditCards', CreditcardsSchema),
    inject: ['BANK'],
  },
];
