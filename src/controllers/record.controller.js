const serviceRecord = require('../services/record.service');
const { Response } = require('../utils/response');
const logger = require('../config/logger.config').log;

module.exports = {
  async get(req, res) {
    const { body } = req;
    try {
      const result = await serviceRecord.findAll(body);
      responseJson = { ...Response.SUCCESS };
      if (Array.isArray(result) && result.length > 0) {
        responseJson.records = result;
      }
      res.status(200).json(responseJson);
    } catch (err) {
      logger.error(`Unexpected error during operation.`, err);
      res.status(400).json(Response.ERROR_GENERAL);
    }
  },
};
