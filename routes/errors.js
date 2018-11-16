const express = require('express');
const router = express.Router();

const errorController = require('../controllers/errors');

const sequlizeErrorController = require('../controllers/postgresql/errors');

router.get('/:anonymous_id',errorController.getErrorByAnonId);

router.post('/',sequlizeErrorController.createError);

module.exports = router;
