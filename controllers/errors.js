var errorModel = require('../models/errors');
var userController = require('./users');

var errorController = {
    createError:(req, res, next)=>{
        // console.log(req.body.userParams);
        userController.findUserByAnonId(req.body.userParams, (err, user)=>{
            if(err) next(err);

            console.log(err, user);
        });
        res.send('us');
    }
}

module.exports = errorController;