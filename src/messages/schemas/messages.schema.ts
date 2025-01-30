import { Schema, Types } from 'mongoose';

export const MessagesSchema = new Schema({
    clientId: { type: Types.ObjectId, ref: 'Clients', required: true },
    advisorId: { type: Types.ObjectId, ref: 'Advisors', required: true },
    content: { type: String, required: true },
    sentDate: { type: Date, required: true, default: Date.now },
    isRead: { type: Boolean, required: true, default: false }
});
