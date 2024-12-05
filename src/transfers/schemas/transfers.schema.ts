import { Schema } from 'mongoose';

export const TransfersSchema = new Schema({
  senderAccount: { type: Number, required: true },
  receiverAccount: { type: Number, required: true },
  amount: { type: Number, required: true },
  transferDate: { type: Date, required: true },
});
