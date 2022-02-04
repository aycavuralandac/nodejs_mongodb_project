const dotenv = require('dotenv');
const { TEST_VAR } = require('./test.config');

dotenv.config();

let databaseUrl;

if (process.env.ON_TEST) {
  databaseUrl = TEST_VAR.DATABASE_URL;
} else {
  databaseUrl = process.env.DATABASE_URL;
}

const ENV_VAR = {
  PORT: process.env.PORT,
  DATABASE_URL: databaseUrl,
  BASIC_AUTH: process.env.BASIC_AUTH,
};

module.exports = { ENV_VAR };
