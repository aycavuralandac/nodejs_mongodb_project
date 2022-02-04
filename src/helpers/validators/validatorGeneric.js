const Joi = require('joi');
const { Response } = require('../../utils/response');
const logger = require('../../config/logger.config').log;

module.exports = {
  async validateGeneric(_joiObj, _data, _res, _next, _options = {}) {
    const schema = Joi.object(_joiObj);
    // eslint-disable-next-line no-unused-vars
    const { error, value } = schema.validate(_data, _options);
    if (error) {
      const responseJson = { ...Response.WRONG_DATA_FORMAT };
      responseJson.msg = `${responseJson.msg}: ${error.message}`;
      logger.error(`Validation Error`, { function: `validateGeneric`, error: error.message });
      return _res.status(422).json(responseJson);
    }
    return _next();
  },
};
