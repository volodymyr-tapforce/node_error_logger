const userModel = require('../models/users');

const userController = {
    findUserByAnonId: (userParams, findCallback) => {
        userModel.findOne({
            anonymous_id: userParams.anonymous_id
        }, (err, user) => {
            if (err) {
                findCallback(err);
            } else if(!user){
                userController.createUser(userParams,(createError, newUser)=>{
                    if(createError) findCallback(err)
                    else findCallback(null,newUser);
                });
            } else {
                findCallback(null, user);
            }
        })
    },
    createUser:(userParams, callback)=>{
        const newUser = new userModel(userParams);
        newUser.save(callback);
    },
    updateUser:(userParams)=>{

    }, 
    getUsers:(req, res, next)=>{
        let skip = req.query.page || 0;
        skip*=10;
        const limit = req.query.limit||10;
        userModel.find()
        .sort({date:-1})
        // .skip(skip)
        // .limit(limit)
        .exec((err, users)=>{
            if(err) return next(err);
            else res.send(users);
        });
    }
}

module.exports = userController;