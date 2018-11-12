var userModel = require('../models/users');

var userController = {
    findUserByAnonId: (id, callback)=>{
        userModel.findOne({anonymous_id:id}, (err, adventure)=> {
            console.log(err, adventure);
        })
    }
}

module.exports = userController;