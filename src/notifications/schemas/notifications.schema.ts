import { Schema } from 'mongoose';

export const NotificationsSchema = new Schema({
    clientId: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: String, required: true },
    sentDate: { type: Date, required: true },
    isRead: { type: Boolean, required: true },
});
