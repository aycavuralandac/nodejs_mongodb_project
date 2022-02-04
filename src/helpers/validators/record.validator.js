const JoiImport = require('joi');
const JoiDate = require('@joi/date');
const validatorGeneric = require('./validatorGeneric');
const { FILTER } = require('../../config/constant.config').dbConst;
const Joi = JoiImport.extend(JoiDate);

module.exports = {
  async validateGet(_req, _res, _next) {
    const joiObj = {};
    joiObj[FILTER.START_DATE] = Joi.date().format('YYYY-MM-DD').required();
    joiObj[FILTER.END_DATE] = Joi.date().format('YYYY-MM-DD').required();
    joiObj[FILTER.MIN_COUNT] = Joi.number().required();
    joiObj[FILTER.MAX_COUNT] = Joi.number().required();
    return validatorGeneric.validateGeneric(joiObj, _req.body, _res, _next);
  },
};
