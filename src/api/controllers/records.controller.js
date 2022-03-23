const service = require('../services/records.service');

exports.postRecords = (req, res, next) => {
  const { startDate } = req.body;
  const { endDate } = req.body;
  const { minCount } = req.body;
  const { maxCount } = req.body;
  service.getRecords(startDate, endDate, minCount, maxCount)
  .then((result) => res.status(200).send(result))
  .catch((error) => next(error));
};