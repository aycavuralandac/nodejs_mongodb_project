/**
 * Response objects
 */

// Specific response object for uncategorized responses
const ResponseObj = (_code, _msg, _records) => ({
  code: _code,
  msg: _msg,
  records: _records,
});

// HTTP Response Objects
const Response = {
  SUCCESS: ResponseObj(0, 'Success'),
  WRONG_DATA_FORMAT: ResponseObj(1, 'Wrong data format'),
  INVALID_AUTHENTICATION: ResponseObj(2, 'Invalid Authentication Credentials'),
  MISSING_AUTHORIZATION_HEADER: ResponseObj(3, 'Missing Authorization Header'),
};

module.exports = {
  Response,
};
