var express = require('express');
var router = express.Router();

var errorController = require('../controllers/errors');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource111');
});

router.post('/',errorController.createError);

module.exports = router;
