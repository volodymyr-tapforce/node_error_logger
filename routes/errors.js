const express = require('express');
const router = express.Router();

const errorController = require('../controllers/errors');

router.get('/:anonymous_id',errorController.getErrorByAnonId);

router.post('/',errorController.createError);

module.exports = router;
