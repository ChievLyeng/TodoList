import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  const DB_URI = process.env.MONGO_URI;

  try {
    await mongoose
      .connect(DB_URI)
      .then(() => console.log(`Database is connected to ${DB_URI}`));
  } catch (error) {
    console.log('Error connect to mongo DB!');
  }
};
