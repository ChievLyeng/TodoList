import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connectDB } from './config/dbConfig';
import cors from 'cors';
import { buildSchema } from 'type-graphql';
import { TodoResolver } from './graphql/resolvers/todoResolver';

const startApolloServer = async () => {
  const app = express();
  const PORT = Number(process.env.PORT);

  app.use(express.json());
  app.use(cors());

  // connect DB
  await connectDB();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TodoResolver],
      validate: true,
    }),
  });

  await startStandaloneServer(apolloServer, {
    listen: { port: PORT },
  });

  console.log(`Server is runing at ${PORT}`);
};

startApolloServer();
