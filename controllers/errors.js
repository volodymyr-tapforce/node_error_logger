var errorModel = require('../models/errors');
var userController = require('./users');

var errorController = {
    createError:(req, res, next)=>{
        // console.log(req.body.userParams);
        userController.findUserByAnonId(req.body.userParams, (err, user)=>{
            if(err) return next(err);

            if(user) { 
                const errorDocParams = {
                    anonymous_id: user.anonymous_id,
                    err_type: req.body.err_type,
                    err_message: req.body.err_message,
                }
                const newErrorDoc = new errorModel(errorDocParams).save((errCreateErrDoc, errorDoc)=>{
                    if(errCreateErrDoc) return next(errCreateErrDoc)
                    else{
                        return res.send(errorDoc);
                    }
                });
            }
        });
    },
    getErrorByAnonId:(req, res, next)=>{
        errorModel.find({anonymous_id:req.query.anonymous_id})
        .exec((err,errorDocs)=>{
            if(err) return next(err)
            else{
                res.send(errorDocs);
            }
        });
    }
}

module.exports = errorController;