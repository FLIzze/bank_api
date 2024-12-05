import { Schema } from 'mongoose';

export const BeneficiarySchema = new Schema({
    clientId: { type: String, required: true },
    name: { type: String, required: true },
    accountNumber: { type: Number, required: true },
    bankName: { type: String, required: true },
    addedDate: { type: Date, required: true },
    isVerified: { type: Boolean, required: true },
});
