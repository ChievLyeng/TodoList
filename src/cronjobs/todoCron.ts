import cron from 'node-cron';
import { getTodos } from '../controller/todoController';

export const CallingCron = cron.schedule('*/2 * * * * *', () => {
  // */2 -> Every 2 seconds
  console.log('Calling cron!!');
});

export const GetTodosCron = cron.schedule('2 * * * * *', async () => {
  //   2  -> At the 2nd second of the minute

  const Todos = await getTodos();
  console.log('Todos', Todos);
});
