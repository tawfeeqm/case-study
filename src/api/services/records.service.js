const { getRecordsByYearMonthDayAndMinMaxCount} = require('../models/mongo/collections/records/records.collection');
const { throwError } = require('../utils/error');
const moment = require('moment');

exports.getRecords = async (startDate, endDate, minCount, maxCount) => {
  if (!moment(startDate, "YYYY-MM-DD", true).isValid()) throwError(400, `Invalid (startDate) format: ${startDate}`);
  if (!moment(endDate, "YYYY-MM-DD", true).isValid()) throwError(400, `Invalid (endDate) format: ${endDate}`);
  if (!Number.isInteger(minCount)) throwError(400, `Invalid (minCount) type: ${typeof minCount}. Expecting type integer`);
  if (!Number.isInteger(maxCount)) throwError(400, `Invalid (maxCount) type: ${typeof maxCount}. Expecting type integer`);
  const result = await getRecordsByYearMonthDayAndMinMaxCount(startDate, endDate, minCount, maxCount);
  // I would have the returned object as response function that takes the object as a parameter
  return { code: 0, msg: "success", records: result};
};