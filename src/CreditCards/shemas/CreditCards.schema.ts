import * as mongoose from 'mongoose';

export const CreditCardsSchema = new mongoose.Schema({
    accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Clients', required: true },
    cardNumber: { type: Number, required: true },
    ccv: { type: Number, required: true },
    expirationDate: { type: Date, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
})