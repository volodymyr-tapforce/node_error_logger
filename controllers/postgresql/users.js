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

        // const usersCount = await userModel.count({
        //     user_id:{'$regex':req.query.user_id},
        //     email:{'$regex':req.query.email}
        // }, function(err, count){
        //     return count;
        // });

        // let skip = (req.query.page - 1) || 0;
        // skip*=10;
        // const limit = req.query.limit||10;

        // userModel.find({
        //     user_id:{'$regex':req.query.user_id},
        //     email:{'$regex':req.query.email}
        // })
        // .sort({lastErrorTime:-1})
        // .skip(skip)
        // .limit(limit)
        // .exec((err, users)=>{
        //     if(err) return next(err);
        //     else res.send({users, usersCount});
        // });
    }
}

module.exports = userController;