/**
 * Authentication operations
 */
const { Response } = require('./response');
const { ENV_VAR } = require('../config/env.config');

module.exports = {
  async checkAuth(_req, _res, _next) {
    if (!_req.headers.authorization || _req.headers.authorization.indexOf('Basic ') === -1) {
      return _res.status(401).json(Response.MISSING_AUTHORIZATION_HEADER);
    }
    if (_req.headers.authorization !== ENV_VAR.BASIC_AUTH) {
      return _res.status(401).json(Response.INVALID_AUTHENTICATION);
    }
    return _next();
  },
};
