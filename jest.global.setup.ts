import { connectDB } from './src/config/dbConfig';

export default async () => {
  await connectDB();
};
