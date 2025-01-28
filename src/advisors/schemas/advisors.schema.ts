import { Schema, Types } from 'mongoose';

export const AdvisorsSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    managedClients: [{ type: Types.ObjectId, ref: 'Clients' }],
    region: { type: String, required: true },
});
