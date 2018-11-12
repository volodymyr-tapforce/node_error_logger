var userModel = require('../models/users');

var userController = {
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

    }
}

module.exports = userController;