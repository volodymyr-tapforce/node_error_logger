const errorModel = require('../models/errors');
const userController = require('./users');

const errorController = {
    createError:(req, res, next)=>{
        // console.log(req.body.userParams);
        userController.findUserByAnonId(req.body.userParams, (err, user, isNewUser)=>{
            if(err) return next(err);

            if(user) { 
                const errorDocParams = {
                    anonymous_id: user.anonymous_id,
                    err_type: req.body.err_type,
                    err_message: req.body.err_message,
                }
                new errorModel(errorDocParams).save((errCreateErrDoc, errorDoc)=>{
                    if(errCreateErrDoc) return next(errCreateErrDoc)
                    else{
                        return res.send({isNewUser, anonymous_id:user.anonymous_id});
                    }
                });
            }
        });
    },
    getErrorByAnonId:async (req, res, next)=>{

        const errorsCount = await errorModel.count({anonymous_id:req.params.anonymous_id}, function(err, count){
            return count;
        });

        let skip = (req.query.page - 1) || 0;
        skip*=10;
        const limit = req.query.limit||10;
        
        errorModel.find({anonymous_id:req.params.anonymous_id})
        .sort({created_at:-1})
        .skip(skip)
        .limit(limit)
        .exec((err,errorDocs)=>{
            if(err) return next(err)
            else{
                res.send({errorDocs, errorsCount});
            }
        });
    }
}

module.exports = errorController;