import { getModelForClass } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { connectDB } from './src/config/dbConfig';
import { Todo } from './src/entities/todoModel';

const TodoModel = getModelForClass(Todo);

export default async () => {
  await connectDB();

  // await TodoModel.deleteMany({});

  // await mongoose.connection.close();
};
