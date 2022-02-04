const { createLogger, format, transports } = require('winston');

const serviceName = 'nodejs_mongodb_fetch_data';

const log = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss',
    }),
    format.colorize(),
    format.printf((args) => {
      const { level, message, label, timestamp } = args;
      const meta = Object.keys(args)
        .filter((key) => ['level', 'message', 'label', 'timestamp'].indexOf(key) === -1)
        .reduce((obj2, key) => {
          obj2[key] = args[key];
          return obj2;
        }, {});
      meta.service = `${serviceName}/${meta.service || ''}`;
      return `${timestamp} ${label || '-'} ${level}: ${message} ${
        Object.keys(meta).length !== 0 ? `- ${JSON.stringify(meta)}` : ''
      }`;
    }),
    format.errors({ stack: true }),
    format.splat(),
  ),
  transports: [
    new transports.Stream({
      stream: process.stderr,
      level: 'debug',
    }),
  ],
});

module.exports = { log };
