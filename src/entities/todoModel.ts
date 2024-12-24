import { prop as DbField, Severity, modelOptions } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { Float, Field as GqlField, ID } from 'type-graphql';
import moment from 'moment';

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
})
export class Todo {
  @GqlField(() => ID, { name: 'id' })
  readonly _id?: ObjectId;

  @DbField({ required: true })
  @GqlField(() => String)
  title!: string;

  @DbField({ required: false })
  @GqlField(() => String, { nullable: true })
  description: string;

  @DbField({ default: false })
  @GqlField(() => Boolean, { nullable: true })
  completed!: boolean;

  @DbField({ required: true })
  @GqlField(() => Float)
  dueDate!: number;

  @DbField({ type: Number, default: 0 })
  updatedAt: number;

  @GqlField(() => Float)
  @DbField({ type: Number, default: moment.now() })
  createdAt: number;
}
