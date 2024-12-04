import * as mongoose from 'mongoose';
export declare const CreditCardsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: string;
    accountId: mongoose.Types.ObjectId;
    cardNumber: number;
    ccv: number;
    expirationDate: NativeDate;
    status: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    type: string;
    accountId: mongoose.Types.ObjectId;
    cardNumber: number;
    ccv: number;
    expirationDate: NativeDate;
    status: string;
}>> & mongoose.FlatRecord<{
    type: string;
    accountId: mongoose.Types.ObjectId;
    cardNumber: number;
    ccv: number;
    expirationDate: NativeDate;
    status: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
