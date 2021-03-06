const { MOCK_DATA } = require('../src/config/test.config');
const db = require('../src/models/db');
const Record = db.records;
const serviceRecord = require('../src/services/record.service');
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

describe('Record service test', () => {
  /**
   * Tests that a valid record can be fetched
   */
  it('Fetch data and response check with criterias', async () => {
    const record = new Record(MOCK_DATA.RECORD);
    await record.save();

    const fetchedRecord = await serviceRecord.findAll(MOCK_DATA.FILTER);

    expect(async () => await serviceRecord.findAll(MOCK_DATA.FILTER)).not.toThrow();
    expect(Array.isArray(fetchedRecord)).toBe(true);
    expect(Object.keys(fetchedRecord[0])).toEqual(Object.keys(ResponseObj));
  });
});
