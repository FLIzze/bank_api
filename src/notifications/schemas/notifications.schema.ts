import { Schema } from 'mongoose';

export const NotificationsSchema = new Schema({
    accountId: { type: String, required: true },
    loanId: { type: String, required: true, unique: true },
    loanAmount: { type: Number, required: true },
    loanType: { type: String, required: true },
    status: { type: String, required: true },
});
