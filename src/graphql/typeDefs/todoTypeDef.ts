import {
  Float,
  ID,
  Field,
  ObjectType as GqlType,
  InputType,
} from 'type-graphql';

@InputType()
export class TodoUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  completed?: boolean;

  @Field(() => Float, { nullable: true })
  dueDate?: number;
}

@InputType()
export class TodoInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean, { defaultValue: false, nullable: false })
  completed: boolean;

  @Field(() => Float)
  dueDate: number;
}

@GqlType()
export class TodoResponse {
  @Field(() => ID) // it convert _id from mongo to id
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean)
  completed: boolean;

  @Field(() => Float)
  dueDate: number;

  @Field(() => Float) 
  updatedAt: number;

  @Field(() => Float)
  createdAt: number;
}
@GqlType()
export class TodoTypeDef {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field()
  completed: boolean;

  @Field(() => Float)
  dueDate: number;

  @Field(() => Float) 
  updatedAt: number;

  @Field(() => Float) 
  createdAt: number;
}
