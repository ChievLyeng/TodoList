import mongoose from 'mongoose';
import ENV from '../constant/envCredential';

export const connectDB = async (): Promise<void> => {
  const DB_URI =  `mongodb://${ENV.DB_USERNAME}:${ENV.DB_PASSWORD}@${ENV.DB_CONNECTION_URI}`

  try {
    await mongoose
      .connect(DB_URI)
      .then(() => console.log(`Database is connected to ${DB_URI}`));
  } catch (error) {
    console.log('Error connect to mongo DB!', error);
  }
};
