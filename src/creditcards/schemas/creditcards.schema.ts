import { Schema } from 'mongoose';

export const CreditcardsSchema = new Schema({
  accountId: { type: Number, required: true },
  cardNumber: { type: Number, required: true, unique: true },
  ccv: { type: Number, required: true },
  expirationDate: { type: Date, required: true },
  type: { type: String, required: true },
  status: { type: String, required: true },
});
