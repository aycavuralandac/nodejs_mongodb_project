const MOCK_DATA = {
  FILTER: {
    startDate: '2015-01-26',
    endDate: '2018-02-02',
    minCount: 2800,
    maxCount: 3000,
  },
  RECORD: {
    key: 'kzSqsBrJ',
    value: 'CPuGkRJDLdQX',
    createdAt: new Date('2016-12-02T01:38:56.842Z'),
    counts: [140, 767, 1896],
  },
  mockRequest: () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    return req;
  },

  mockResponse: () => {
    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  },
};

const TEST_VAR = {
  DATABASE_URL: 'mongodb://127.0.0.1/my_database',
};
module.exports = { MOCK_DATA, TEST_VAR };
