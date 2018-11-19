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
        userController.findUserByAnonId(req.body.userParams, (user)=>{
            // if empy return null
            res.send(user);
        });
    },
    getErrorByAnonId:async (req, res, next)=>{
        const where = {anonymous_id:req.params.anonymous_id};
        const errorsCount = await errorModel.count({where}); 

        let offset = (req.query.page - 1) || 0;
        offset*=10;
        const limit = req.query.limit||10;

        const errorDocs = await errorModel.findAll({ where,limit, offset, order: [['createdAt', 'DESC']]  });
        res.send({errorsCount,errorDocs});
    }
}

module.exports = errorController;