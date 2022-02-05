const { MOCK_DATA } = require('../src/config/test.config');
const db = require('../src/models/db');
const Record = db.records;
const controllerRecord = require('../src/controllers/record.controller');
const dbHandler = require('./dbHandler');
const ResponseObj = {
  totalCount: 0,
  key: '',
  createdAt: new Date(),
};

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

describe('Post method recordController ', () => {
  it('should 200 and return correct value', async () => {
    let req = MOCK_DATA.mockRequest();
    req.body = MOCK_DATA.FILTER;
    const res = MOCK_DATA.mockResponse();

    await controllerRecord.get(req, res);

    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith('Hello i am todo controller');
  });

  //   it('should 404 and return correct value', async () => {
  //     let req = mockRequest();
  //     req.params.id = null;
  //     const res = mockResponse();

  //     await controller.todoController(req, res);

  //     expect(res.status).toHaveBeenCalledWith(404);
  //     expect(res.json).toHaveBeenCalledWith({ message: 'Not Found' });
  //   });
});
