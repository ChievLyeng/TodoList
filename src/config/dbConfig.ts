import mongoose from 'mongoose';
import dotEnv from 'dotenv';
dotEnv.config({ path: './src/test/.test.env' });

export const connectDB = async (): Promise<void> => {
  const DB_URI = process.env.MONGO_URI_MASTER;

  try {
    await mongoose
      .connect(DB_URI)
      .then(() => console.log(`Database is connected to ${DB_URI}`));
  } catch (error) {
    console.log('Error connect to mongo DB!', error);
  }
};
