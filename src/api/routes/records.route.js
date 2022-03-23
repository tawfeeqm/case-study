const express = require('express');
const router = express.Router();
const controller = require('../controllers/records.controller');

router.post('/records', controller.postRecords);

module.exports = router;