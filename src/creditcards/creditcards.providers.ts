import { Connection } from 'mongoose';
import { CreditCardsSchema } from './schemas/creditcards.schema';

export const creditcardsProviders = [
  {
    provide: 'CREDITCARDS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('CreditCards', CreditCardsSchema),
    inject: ['BANK'],
  },
];
