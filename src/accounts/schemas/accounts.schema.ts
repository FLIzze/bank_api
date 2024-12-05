import { Schema } from 'mongoose';

export const AccountsSchema = new Schema({
    clientId: { type: String, required: true },
    accountNumber: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    creditcards: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CreditCards',
        },
    ],
});
