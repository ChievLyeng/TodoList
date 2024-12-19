import { prop as DbField, Severity, modelOptions } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { Field as GqlField, ID, Int } from 'type-graphql';

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: { toJSON: { virtuals: true }, toObject: { virtuals: true } },
})
export class Todo {
  @GqlField(() => ID, { name: 'id' })
  readonly _id?: ObjectId;

  @DbField({ required: true })
  @GqlField(() => String)
  title!: string;

  @DbField({ required: true })
  @GqlField(() => String)
  description!: string;

  @DbField({ default: false })
  @GqlField(() => Boolean, { nullable: true })
  completed!: boolean;

  @DbField({ required: true })
  @GqlField(() => Int)
  dueDate!: number;
}
