import * as mongoose from 'mongoose';
require('dotenv').config();

export const databaseProviders = [
  {
    provide: 'BANK',
    useFactory: async (): Promise<typeof mongoose> => {
      try {
        const connection = await mongoose.connect(process.env.DB_URI);
        console.log('Database connected successfully');
        return connection;
      } catch (error) {
        console.error('Database connection error:', error);
        throw error;
      }
    },
  },
];
