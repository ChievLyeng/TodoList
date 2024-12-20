import { connectDB } from './src/config/dbConfig';
import { getModelForClass } from '@typegoose/typegoose';
import { Todo } from './src/entity/todoModel';
import { Types } from 'mongoose';

const TodoModel = getModelForClass(Todo);

export default async () => {
  await connectDB();
  TodoModel.insertMany([
    {
      title: 'Todo 1',
      description: 'Desc 1',
      dueDate: 121,
    },
  ]);
};
