import mongoose from 'mongoose';
import { connectDB } from './src/config/dbConfig';

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});
