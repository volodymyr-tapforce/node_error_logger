const errorModel = require('../../models/postgresql/errors');
const userController = require('./users');

const errorController = {
    createError:(req, res, next)=>{
        // errorModel.create({
        //     anonymous_id:'1111',
        //     err_type:'warning',
        //     err_message:'12321312312'
        // }).then((result)=>{
        //     res.send(result);
        // })
        userController.findUserByAnonId(req.body.userParams, (...args)=>{
            // if empy return null
            res.send(args);
        });
    },
    getErrorByAnonId:async (req, res, next)=>{

    }
}

module.exports = errorController;