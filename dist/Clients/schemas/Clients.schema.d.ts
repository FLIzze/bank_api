import * as mongoose from 'mongoose';
export declare const ClientsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    phone?: string;
    mail?: string;
    passcode?: string;
    birthdate?: NativeDate;
    address?: string;
    zipcode?: number;
    country?: string;
    amount?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    phone?: string;
    mail?: string;
    passcode?: string;
    birthdate?: NativeDate;
    address?: string;
    zipcode?: number;
    country?: string;
    amount?: number;
}>> & mongoose.FlatRecord<{
    phone?: string;
    mail?: string;
    passcode?: string;
    birthdate?: NativeDate;
    address?: string;
    zipcode?: number;
    country?: string;
    amount?: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
