const db = require('../models/db');
const Record = db.records;
const logger = require('../config/logger.config').log;
const fileName = `services/record.service`;

module.exports = {
  async findAll(filter) {
    logger.info(`Service method called`, {
      function: fileName,
      params: filter,
    });
    const { startDate, endDate, minCount, maxCount } = filter;
    const conditionDate = { createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } };
    const conditionValue = { totalCount: { $gte: minCount, $lte: maxCount } };

    try {
      const result = await Record.aggregate([
        { $match: conditionDate },
        { $unwind: '$counts' },
        {
          $group: {
            _id: '$key',
            createdAt: { $first: '$createdAt' },
            totalCount: {
              $sum: '$counts',
            },
          },
        },
        { $match: conditionValue },
        { $project: { _id: 0, key: '$_id', totalCount: 1, createdAt: '$createdAt' } },
      ]);

      return result;
    } catch (err) {
      logger.error(`Unexpected error during operation.`, {
        function: fileName,
        error: err,
      });
      return err;
    }
  },
};
