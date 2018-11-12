var express = require('express');
var router = express.Router();

var errorController = require('../controllers/errors');

router.get('/',errorController.getErrorByAnonId);

router.post('/',errorController.createError);

module.exports = router;
