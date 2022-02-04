module.exports = (mongoose) => {
  const Record = mongoose.model(
    'record',
    mongoose.Schema({
      key: String,
      value: String,
      createdAt: Date,
      counts: Array,
    }),
  );

  return Record;
};
