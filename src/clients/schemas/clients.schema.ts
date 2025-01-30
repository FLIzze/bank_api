import { Schema } from 'mongoose';

export const ClientsSchema = new Schema({
  phone: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  passcode: { type: String, required: true },
  birthdate: { type: Date, required: true },
  address: { type: String, required: true },
  zipcode: { type: Number, required: true },
  country: { type: String, required: true },
  amount: { type: Number, required: true, default: 0 },
});
