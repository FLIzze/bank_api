import { Connection } from 'mongoose';
export declare const ClientsProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        phone?: string;
        mail?: string;
        passcode?: string;
        birthdate?: NativeDate;
        address?: string;
        zipcode?: number;
        country?: string;
        amount?: number;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        phone?: string;
        mail?: string;
        passcode?: string;
        birthdate?: NativeDate;
        address?: string;
        zipcode?: number;
        country?: string;
        amount?: number;
    }> & {
        phone?: string;
        mail?: string;
        passcode?: string;
        birthdate?: NativeDate;
        address?: string;
        zipcode?: number;
        country?: string;
        amount?: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        phone?: string;
        mail?: string;
        passcode?: string;
        birthdate?: NativeDate;
        address?: string;
        zipcode?: number;
        country?: string;
        amount?: number;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        phone?: string;
        mail?: string;
        passcode?: string;
        birthdate?: NativeDate;
        address?: string;
        zipcode?: number;
        country?: string;
        amount?: number;
    }>> & import("mongoose").FlatRecord<{
        phone?: string;
        mail?: string;
        passcode?: string;
        birthdate?: NativeDate;
        address?: string;
        zipcode?: number;
        country?: string;
        amount?: number;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
