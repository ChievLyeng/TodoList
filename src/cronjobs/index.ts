import { connectDB } from '../config/dbConfig';
import asyncErrorHandler from '../errorHandlers/asyncErrorHandler';
import { CallingCron, GetTodosCron } from './todoCron';

const startCronjobs = asyncErrorHandler(async () => {
  await connectDB();
  CallingCron.start();
  GetTodosCron.start();
});

startCronjobs();
