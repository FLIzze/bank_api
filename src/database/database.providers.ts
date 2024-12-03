import * as mongoose from 'mongoose';
require('dotenv').config();

export const databaseProviders = [{
    provide:'BANK',
    useFactory:():Promise<typeof mongoose> => mongoose.connect(process.env.DB_URI)
}]
