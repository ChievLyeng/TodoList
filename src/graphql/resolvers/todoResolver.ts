import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';

import { TodoInput, TodoUpdateInput } from '../typeDefs/todoTypeDef';
import {
  getTodos,
  deleteTodo,
  createTodo,
  updateTodo,
  getTodoById,
  getTodoByTitle,
} from '../../controller/todoController';
import { TodoResponse } from '../typeDefs/todoTypeDef';
import { Todo } from '../../entity/todoModel';
import { GraphQLError } from 'graphql';
import { Types } from 'mongoose';
@Resolver()
export class TodoResolver {
  @Mutation(() => TodoResponse, { nullable: true }) // type of return value when created data
  async createTodo(@Arg('input') input: TodoInput): Promise<Todo> {
    return createTodo(input);
  }

  @Mutation(() => TodoResponse)
  async deleteTodo(@Arg('todoId') todoId: string): Promise<Todo> {
    return await deleteTodo(todoId);
  }

  @Mutation(() => TodoResponse)
  async updateTodo(
    @Arg('todoId') todoId: string,
    @Arg('data') data: TodoUpdateInput
  ) {
    return updateTodo(todoId, data);
  }

  @Query(() => [TodoResponse])
  async getTodos(): Promise<TodoResponse[]> {
    return getTodos();
  }

  @Query(() => TodoResponse, { nullable: true })
  async getTodoById(@Arg('todoId') todoId: string): Promise<TodoResponse> {
    return getTodoById(todoId);
  }

  @Query(() => TodoResponse)
  async getTodoByTitle(
    @Arg('todoTitle') todoTitle: string
  ): Promise<TodoResponse> {
    return getTodoByTitle(todoTitle);
  }
}
