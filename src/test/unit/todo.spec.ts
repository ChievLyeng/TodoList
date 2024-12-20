import { describe } from 'node:test';
import { createTodo } from '../../controller/todoController';

describe('createTodo', () => {
  const mockInput = {
    title: 'Test 1',
    describe: 'Desc 1',
    dueDate: 1212,
  };

  test('Should throw a "Title is required." error message', async () => {
    await expect(
      createTodo({
        input: { ...mockInput, title: '' },
      })
    ).rejects.toThrow('Title is required.');
  });

  //   test('Should throw a "Title is required" error message', async () => {
  //     await expect(
  //       createTodo({
  //         input: { ...mockInput, title: '' },
  //       })
  //     ).rejects.toThrow('Title is require.');
  //   });
});
