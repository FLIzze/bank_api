import { Connection } from 'mongoose';
import { AdvisorsSchema } from './schemas/advisors.schema';

export const AdvisorsProviders = [
  {
    provide: 'ADVISORS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Advisors', AdvisorsSchema),
    inject: ['BANK'],
  },
];
