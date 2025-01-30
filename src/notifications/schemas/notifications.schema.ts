import { Schema, Types } from 'mongoose';

export const NotificationsSchema = new Schema({
    clientId: { type: Types.ObjectId, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: String, required: true },
    sentDate: { type: Date, required: true, default: Date.now },
    isRead: { type: Boolean, required: true },
});
