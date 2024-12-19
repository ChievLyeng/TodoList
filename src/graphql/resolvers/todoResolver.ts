import {
  Resolver,
  Query,
} from 'type-graphql';

import {TodoTypeDef} from '../typeDefs/todoTypeDef';

@Resolver()
export  class TodoResolver {

  @Query(() => [TodoTypeDef])
  async getTodos(): Promise<TodoTypeDef[]> {
    return [];
  }
}
