import { Schema } from 'mongoose';

export const CreditCardsSchema = new Schema({
  accountId: { type: String, required: true },
  cardNumber: { type: Number, required: true, unique: true },
  ccv: { type: Number, required: true },
  expirationDate: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, required: true },
});
