const userModel = require('../../models/postgresql/users');

const userController = {
    findUserByAnonId:  (userParams, findCallback) => {
        userModel.findOne({ where: {anonymous_id: userParams.anonymous_id} }).then(async (user )=> {
            if(user === null){
                const newUser = await userController.createUser(userParams);
                findCallback(newUser);
            } else {
                const updatedUser = await userController.updateUser(userParams, user);
                findCallback(updatedUser);
            }
        })
    },
    createUser:(userParams)=>{
        return userModel.create(userParams);
    },
    updateUser:(userParams, user)=>{
        const paramsForUpdate = {
            lastErrorTime: new Date()
        }
        if(userParams.email&&(user.email!==userParams.email)) paramsForUpdate.email = userParams.email;
        if(userParams.user_id&&(user.user_id!==userParams.user_id)) paramsForUpdate.user_id = userParams.user_id;

        return user.update(paramsForUpdate);
    }, 
    getUsers:async (req, res, next)=>{

        const usersCount = await userModel.count();

        let offset = (req.query.page - 1) || 0;
        offset*=10;
        const limit = req.query.limit||10;
        const users = await userModel.findAll({ limit, offset, order: [['lastErrorTime', 'DESC']]  });

        res.send({usersCount, users});

    }
}

module.exports = userController;