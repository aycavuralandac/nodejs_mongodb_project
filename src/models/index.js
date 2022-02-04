const mongoose = require('mongoose');
const { ENV_VAR } = require('../config/env.config');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = ENV_VAR.DATABASE_URL;
db.records = require('./record.model')(mongoose);

module.exports = db;
