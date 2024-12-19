import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export  class TodoTypeDef {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field()
  description: string;

  @Field()
  completed: boolean;

  @Field(() => Int)
  dueDate: number;
}