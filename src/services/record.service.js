const db = require('../models');
const Record = db.records;

module.exports = {
  async findAll(filter) {
    const { startDate, endDate, minCount, maxCount } = filter;
    const conditionDate = { createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } };
    const conditionValue = { totalCount: { $gte: minCount, $lte: maxCount } };

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

    return { records: result };
  },
};
