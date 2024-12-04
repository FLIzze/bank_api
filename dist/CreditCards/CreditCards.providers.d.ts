import { Connection } from 'mongoose';
export declare const CreditCardsProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        type: string;
        accountId: import("mongoose").Types.ObjectId;
        cardNumber: number;
        ccv: number;
        expirationDate: NativeDate;
        status: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        type: string;
        accountId: import("mongoose").Types.ObjectId;
        cardNumber: number;
        ccv: number;
        expirationDate: NativeDate;
        status: string;
    }> & {
        type: string;
        accountId: import("mongoose").Types.ObjectId;
        cardNumber: number;
        ccv: number;
        expirationDate: NativeDate;
        status: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        type: string;
        accountId: import("mongoose").Types.ObjectId;
        cardNumber: number;
        ccv: number;
        expirationDate: NativeDate;
        status: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        type: string;
        accountId: import("mongoose").Types.ObjectId;
        cardNumber: number;
        ccv: number;
        expirationDate: NativeDate;
        status: string;
    }>> & import("mongoose").FlatRecord<{
        type: string;
        accountId: import("mongoose").Types.ObjectId;
        cardNumber: number;
        ccv: number;
        expirationDate: NativeDate;
        status: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
