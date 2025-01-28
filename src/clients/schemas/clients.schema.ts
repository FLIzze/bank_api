import { Schema } from 'mongoose';

export const ClientsSchema = new Schema({
    phone: String,
    mail: String,
    passcode: String,
    birthdate: Date,
    address: String,
    zipcode: Number,
    country: String,
    amount: Number,
})
