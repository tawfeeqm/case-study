const mongoose = require('mongoose');
const records = mongoose.connection.collection('records');

exports.getRecordsByYearMonthDayAndMinMaxCount = async (startDate, endDate, minCount, maxCount) => {
  const result = await records.aggregate([
    {
      $match:
      {
        createdAt: {
          $gte: new Date(startDate),
          $lt: new Date(endDate)
        }
      },
    },
    {
      $project: {
        _id: 0,
        key: 1,
        createdAt: 1,
        totalCount: {
          $sum: "$counts"
        },
      }
    },
    {
      $match: {
        totalCount: {
          $gte: minCount,
          $lt: maxCount
        }
      }
    }
  ]).toArray();
  return result;
};