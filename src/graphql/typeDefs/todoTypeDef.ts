import { ID, Field, Int, ObjectType as GqlType, InputType } from 'type-graphql';
import { Todo } from '../../entity/todoModel';

@InputType()
export class TodoInput {
  @Field(() => String)
  title: string;

  @Field()
  description: string;

  @Field()
  completed: boolean;

  @Field(() => Int, { nullable: true })
  dueDate: number;
}

@GqlType()
export class TodoResponse {
  @Field(() => ID) // it convert _id from mongo to id
  id: string;

  @Field(() => String)
  title: string;

  @Field()
  description: string;

  @Field(() => Boolean, { nullable: false })
  completed: boolean;

  @Field(() => Int)
  dueDate: number;
}
@GqlType()
export class TodoTypeDef {
  @Field(() => String)
  title: string;

  @Field()
  description: string;

  @Field()
  completed: boolean;

  @Field(() => Int)
  dueDate: number;
}
