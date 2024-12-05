import { Schema } from 'mongoose';

export const AdvisorsSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    managedClients: { type: [String], required: true },
    region: { type: String, required: true },
});
