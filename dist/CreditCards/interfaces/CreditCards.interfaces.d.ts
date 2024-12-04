import { Document } from 'mongoose';
export interface CreditCards extends Document {
    accountId: string;
    cardNumber: number;
    ccv: number;
    expirationDate: Date;
    type: string;
    status: string;
}
