const serviceRecord = require('../services/record.service');
const { Response } = require('../utils/response');

module.exports = {
  async get(req, res) {
    const { body } = req;
    try {
      const result = await serviceRecord.findAll(body);
      if (Object.prototype.hasOwnProperty.call(result, 'records')) {
        const responseJson = { ...Response.SUCCESS };
        responseJson.records = result;
        res.status(200).json(responseJson);
      }
    } catch (err) {
      res.send(400);
    }
  },
};
