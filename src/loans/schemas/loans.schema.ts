import { Schema, Types } from 'mongoose';

export const LoansSchema = new Schema({
    clientId: { type: Types.ObjectId, required: true },
    amount: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    monthlyPayment: { type: Number, required: true },
    remainingBalance: { type: Number, required: true },
    status: { type: String, required: true },
});
