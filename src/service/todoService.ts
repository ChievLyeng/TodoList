import { getModelForClass } from '@typegoose/typegoose';
import { Todo } from '../entities/todoModel';
import {
  TodoInput,
  TodoResponse,
  TodoUpdateInput,
} from '../graphql/typeDefs/todoTypeDef';
import moment from 'moment';

export class TodoService {
  private todoModel = getModelForClass(Todo);

  // create Todo
  async create(data: TodoInput): Promise<Todo> {
    return await this.todoModel.create({
      title: data.title,
      description: data.description,
      completed: data.completed,
      dueDate: data.dueDate,
    });
  }

  // get all todos
  async find(): Promise<TodoResponse[]> {
    return await this.todoModel.find();
  }

  // get todo by id
  async findById(todoId: string): Promise<TodoResponse> {
    return await this.todoModel.findById({ _id: todoId });
  }

  // get todo by title
  async findByTitle(todoTitle: string): Promise<TodoResponse> {
    return await this.todoModel.findOne({ title: todoTitle });
  }

  // delete todo
  async delete(todId: string): Promise<Todo> {
    return await this.todoModel.findByIdAndDelete({ _id: todId });
  }

  // update todo by id
  async update(todoId: string, data: TodoUpdateInput): Promise<Todo> {
    const { title, description, dueDate, completed } = data;
    const updatedTodo = await this.todoModel.findByIdAndUpdate(
      todoId,
      {
        title,
        description,
        completed,
        dueDate,
        updatedAt: moment.now(),
      },
      { new: true }
    );
    return updatedTodo;
  }
}
