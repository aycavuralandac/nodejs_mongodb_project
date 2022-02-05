const { MOCK_DATA } = require('../src/config/test.config');
const db = require('../src/models/db');
const Record = db.records;
const dbHandler = require('./dbHandler');

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

describe('Record model test', () => {
  /**
   * Tests that a valid record can be created without throwing any errors.
   */
  it('can be created correctly', async () => {
    const record = new Record(MOCK_DATA.RECORD);
    await record.save();
    const fetchedRecord = await Record.findOneAndUpdate(
      { _id: record._id },
      { key: MOCK_DATA.RECORD.key },
    );
    expect(fetchedRecord.key).toEqual(MOCK_DATA.RECORD.key);
  });
});
