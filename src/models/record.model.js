const { RECORD } = require('../config/constant.config').dbConst;

module.exports = (mongoose) => {
  const Record = mongoose.model(
    RECORD.TABLE_NAME,
    mongoose.Schema({
      [RECORD.KEY]: String,
      [RECORD.VALUE]: String,
      [RECORD.CREATED_AT]: Date,
      [RECORD.COUNTS]: Array,
    }),
  );

  return Record;
};
