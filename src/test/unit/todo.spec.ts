import { describe } from 'node:test';
import { createTodo } from '../../controller/todoController';
import { getModelForClass } from '@typegoose/typegoose';
import { Todo } from '../../entity/todoModel';
import { graphql } from 'graphql';

const mockInput = {
  title: 'Test 1',
  description: 'Desc 1', // Corrected from "describe" to "description"
  dueDate: 1212,
  completed: false,
};

describe('createTodo', () => {
  test('Should Show error message Title is require.', async () => {
    const todo = await createTodo({
      ...mockInput,
      title: '',
    });

    expect(todo.message).toEqual('Title is required.');

    // // Verify the controller was called correctly
    // expect(createTodo).toHaveBeenCalledWith(mockInput);
    // expect(createTodo).toHaveBeenCalledTimes(1);
  });

  test('Should Show error message Invalid Due Date, It must be number.', async () => {
    const todo = await createTodo({
      ...mockInput,
      dueDate: undefined,
    });

    expect(todo.message).toEqual('Invalid Due Date, It must be number.');

    // // Verify the controller was called correctly
    // expect(createTodo).toHaveBeenCalledWith(mockInput);
    // expect(createTodo).toHaveBeenCalledTimes(1);
  });
});
