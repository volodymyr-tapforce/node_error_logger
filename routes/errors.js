const express = require('express');
const router = express.Router();
const sequlizeErrorController = require('../controllers/postgresql/errors');

// const errorController = require('../controllers/errors');


router.get('/:anonymous_id',sequlizeErrorController.getErrorByAnonId);

router.post('/',sequlizeErrorController.createError);

module.exports = router;
