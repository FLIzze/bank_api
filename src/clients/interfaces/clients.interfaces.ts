import { Document } from "mongoose";

export interface Clients extends Document {
    phone: string;
    mail: string;
    passcode: string;
    birthdate: Date;
    address: string;
    zipcode: number;
    country: string;
    amount: number;
}
