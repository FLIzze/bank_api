import { Schema } from 'mongoose';

export const MessagesSchema = new Schema({
    accountId: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, required: true },
});
