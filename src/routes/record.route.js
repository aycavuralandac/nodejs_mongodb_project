const express = require('express');
const router = express.Router();
const controllerRecord = require('../controllers/record.controller');
const validatorRecord = require('../helpers/validators/record.validator');

router.post('/', validatorRecord.validateGet, controllerRecord.get);

module.exports = router;
