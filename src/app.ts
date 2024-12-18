import express from 'express';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import cors from 'cors';

const app = express();
app.use(express.json());

async function startApolloServer() {
  const typeDefs = `
    type Todo {
      id: ID!
      title: String!
      completed: Boolean!
    }

    type Query {
      todos: [Todo!]!
    }

    type Mutation {
      addTodo(title: String!): Todo!
    }
  `;

  const todos = [];

  const resolvers = {
    Query: {
      todos: () => [
        {
          id: '1',
          title: 'Todo1',
          completed: false,
        },
      ],
    },
    Mutation: {
      addTodo: (_, { title }) => {
        const newTodo = { id: todos.length + 1, title, completed: false };
        todos.push(newTodo);
        return newTodo;
      },
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
