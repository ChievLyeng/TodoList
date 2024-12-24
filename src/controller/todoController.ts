import { Todo } from '../entities/todoModel';
import asyncErrorHandler from '../errorHandlers/asyncErrorHandler';
import {
  TodoInput,
  TodoResponse,
  TodoUpdateInput,
} from '../graphql/typeDefs/todoTypeDef';
import { TodoService } from '../service/todoService';
import { Types } from 'mongoose';

const todoService = new TodoService();

export const createTodo = asyncErrorHandler(
  async (input: TodoInput): Promise<Todo> => {
    const { title, description, completed, dueDate } = input;

    // Check if title is not input
    if (!title) throw new Error('Title is required.');

    const validatedData = {
      title,
      description,
      completed,
      dueDate,
    };

    return await todoService.create(validatedData);
  }
);

export const getTodos = asyncErrorHandler(async (): Promise<TodoResponse[]> => {
  return await todoService.find();
});

export const getTodoById = asyncErrorHandler(
  async (todoId: string): Promise<TodoResponse> => {
    // check if valid todoId
    if (!Types.ObjectId.isValid(todoId)) throw new Error('Invalid Todo Id!');

    return await todoService.findById(todoId);
  }
);

export const getTodoByTitle = asyncErrorHandler(
  async (todoTitle: string): Promise<TodoResponse> => {
    // check for title input
    if (!todoTitle) throw new Error('Title is require.');
    return await todoService.findByTitle(todoTitle);
  }
);

export const updateTodo = asyncErrorHandler(
  async (todoId: string, data: TodoUpdateInput): Promise<Todo> => {
    // check if valid todoId
    if (!Types.ObjectId.isValid(todoId)) throw new Error('Invalid Todo Id.');

    const updatedTodo = await todoService.update(todoId, data);

    // check if todo does not exist
    if (!updatedTodo) throw new Error('Todo not found.');

    return updatedTodo;
  }
);

export const deleteTodo = asyncErrorHandler(
  async (todoId: string): Promise<Todo> => {
    // check for valid todoId
    if (!Types.ObjectId.isValid(todoId)) throw new Error('Invalid Todo Id.');

    return todoService.delete(todoId);
  }
);
