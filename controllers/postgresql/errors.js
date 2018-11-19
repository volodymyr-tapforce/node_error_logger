const errorModel = require('../../models/postgresql/errors');
const userController = require('./users');

const errorController = {
    createError: (req, res, next)=>{
  
        userController.findUserByAnonId(req.body.userParams, async (user)=>{
            // if empy return null
            if(user) {
                const errorDocParams = {
                    anonymous_id: user.anonymous_id,
                    err_type: req.body.err_type,
                    err_message: req.body.err_message,
                }

                const newError = await errorModel.create(errorDocParams);
                return res.send({isNewUser:true, anonymous_id:user.anonymous_id});
            } else{
                return next(new Error('error create problem'));
            }
        });
    },
    getErrorByAnonId:async (req, res, next)=>{
        const where = {anonymous_id:req.params.anonymous_id};
        const errorsCount = await errorModel.count({where}); 

        let offset = (req.query.page - 1) || 0;
        offset*=10;
        const limit = req.query.limit||10;

        const errorDocs = await errorModel.findAll({ where,limit, offset, order: [['createdAt', 'DESC']]  });
        return res.send({errorsCount,errorDocs});
    }
}

module.exports = errorController;