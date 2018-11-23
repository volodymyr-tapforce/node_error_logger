const userModel = require('../models/users');

const userController = {
    findUserByAnonId: (userParams, findCallback) => {
        userModel.findOne({
            anonymusId: userParams.anonymusId
        }, (err, user) => {
            if (err) {
                findCallback(err);
            } else if(!user){
                userController.createUser(userParams,(createError, newUser)=>{
                    if(createError) findCallback(createError)
                    else { 
                        const isNewUser = true;
                        findCallback(null,newUser, isNewUser);
                    }
                });
            } else {
                userController.updateUser(userParams,user,(updateError, updatedUser)=>{
                    if(updateError) findCallback(updateError)
                    else { 
                        const isNewUser = true;
                        findCallback(null,updatedUser, isNewUser);
                    }
                });

                // const isNewUser = true;
                // findCallback(null, user, isNewUser);
            }
        })
    },
    createUser:(userParams, createCallback)=>{
        const newUser = new userModel(userParams);
        newUser.save(createCallback);
    },
    updateUser:(userParams, user, updateCallback)=>{
        const paramsForUpdate = {
            // ...user,
            lastErrorTime: new Date()
        }
        if(userParams.email&&(user.email!==userParams.email)) paramsForUpdate.email = userParams.email;
        if(userParams.user_id&&(user.user_id!==userParams.user_id)) paramsForUpdate.user_id = userParams.user_id;

        user.set(paramsForUpdate);
        user.save(updateCallback);
    }, 
    getUsers:async (req, res, next)=>{

        const usersCount = await userModel.count({
            user_id:{'$regex':req.query.user_id},
            email:{'$regex':req.query.email}
        }, function(err, count){
            return count;
        });

        let skip = (req.query.page - 1) || 0;
        skip*=10;
        const limit = req.query.limit||10;

        userModel.find({
            user_id:{'$regex':req.query.user_id},
            email:{'$regex':req.query.email}
        })
        .sort({lastErrorTime:-1})
        .skip(skip)
        .limit(limit)
        .exec((err, users)=>{
            if(err) return next(err);
            else res.send({users, usersCount});
        });
    }
}

module.exports = userController;