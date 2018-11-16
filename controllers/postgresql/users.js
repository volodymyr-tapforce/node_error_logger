const userModel = require('../../models/postgresql/users');

const userController = {
    findUserByAnonId: (userParams, findCallback) => {
        userModel.findOne({ where: {anonymous_id: userParams.anonymous_id} }).then(user => {
            findCallback(user);
        })
        // userController.createUser(userParams,result=>{
        //     findCallback(result); 
        // })
    },
    createUser:(userParams, createCallback)=>{
        userModel.create(userParams).then(createCallback);
        // newUser.save(createCallback);
    }

}

module.exports = userController;