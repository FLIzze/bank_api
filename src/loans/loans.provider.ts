import { Connection } from 'mongoose';
import { LoansSchema } from './schemas/loans.schema';

export const LoansProviders = [
  {
    provide: 'LOANS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Loans', LoansSchema),
    inject: ['BANK'],
  },
];
