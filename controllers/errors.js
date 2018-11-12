var errorModel = require('../models/errors');
var userController = require('./users');

var errorController = {
    createError:(req, res, next)=>{

        userController.findUserByAnonId(req.body.anonymous_id);
        res.send('us');
    }
}

module.exports = errorController;