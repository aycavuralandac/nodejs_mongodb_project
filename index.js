const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const expressBodyTrimmer = require('express-body-trimmer');
const { ENV_VAR } = require('./src/config/env.config');
const logger = require('./src/config/logger.config').log;
const db = require('./src/models/db');
const routeRecord = require('./src/routes/record.route');

const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(expressBodyTrimmer());

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('Connected to the database!');
  })
  .catch((err) => {
    logger.error('Cannot connect to the database!', err);
    process.exit();
  });

const utilAuthentication = require('./src/utils/authentication');
app.use(utilAuthentication.checkAuth);

app.use('/api/records', routeRecord);

(async () => {
  const port = ENV_VAR.PORT;
  app.listen(port);
  logger.info(`Listening on port ${port}`);
})();
