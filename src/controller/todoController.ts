import { Todo } from '../entity/todoModel';
import { TodoInput, TodoResponse } from '../graphql/typeDefs/todoTypeDef';
import { TodoService } from '../service/todoService';

const todoService = new TodoService();

// Define the createTodo function
export const createTodo = async (input): Promise<Todo> => {
  const { title, description, completed, dueDate } = input;

  const validatedInfo = {
    title,
    description,
    completed,
    dueDate,
  };

  return await todoService.create(validatedInfo);
};

export const getTodos = async (): Promise<TodoResponse[]> => {
  return await todoService.find();
};

export const getTodoById = async (todoId: string): Promise<TodoResponse> => {
  return await todoService.findById(todoId);
};

export const getTodoByTitle = async (
  todoTitle: string
): Promise<TodoResponse> => {
  return await todoService.findByTitle(todoTitle);
};

export const updateTodo = async (
  todoId: string,
  data: TodoInput
): Promise<Todo> => {
  return await todoService.update(todoId, data);
};

export const deleteTodo = async (todoId: string): Promise<Todo> => {
  return todoService.delete(todoId);
};
