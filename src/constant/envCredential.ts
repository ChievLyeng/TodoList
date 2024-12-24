import dotEnv from 'dotenv';

const isUnitTest = 'test' == process.env.NODE_ENV;

if (isUnitTest) dotEnv.config({ path: './src/test/.test.env' });

const { DB_USERNAME, DB_PASSWORD, DB_CONNECTION_URI } = process.env;

const ENV = {
  DB_USERNAME,
  DB_PASSWORD,
  DB_CONNECTION_URI,
};

export default ENV;
