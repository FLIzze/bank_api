import { Connection } from 'mongoose';
import { CreditCardsSchema } from './shemas/CreditCards.schema';

export const CreditCardsProviders = [
    {
        provide: 'CREDITCARDS_MODEL',
        useFactory: (connection:Connection) => connection.model('CreditCards', CreditCardsSchema),
        inject: ['BANK'],
    }
]