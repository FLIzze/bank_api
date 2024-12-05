import { Connection } from 'mongoose';
import { BeneficiarySchema } from './schemas/beneficiary.schema';

export const BeneficiaryProviders = [
  {
    provide: 'BENEFICIARY_MODEL',
    useFactory: (connection: Connection) => connection.model('Beneficiary', BeneficiarySchema),
    inject: ['BANK'],
  },
];
