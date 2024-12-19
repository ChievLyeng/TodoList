import { getModelForClass } from '@typegoose/typegoose';
import { Todo } from '../entity/todoModel';
import { TodoInput, TodoResponse } from '../graphql/typeDefs/todoTypeDef';

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
  async update(todoId: string, data: TodoInput): Promise<Todo> {
    const updatedTodo = await this.todoModel.findByIdAndUpdate({
      _id: todoId,
      ...data,
    });
    return updatedTodo;
  }
}
