import * as mongoose from 'mongoose';

export const ClientsSchema = new mongoose.Schema({
    phone: String,
    mail: String,
    passcode: String,
    birthdate: Date,
    address: String,
    zipcode: Number,
    country: String,
    amount: Number,
})
