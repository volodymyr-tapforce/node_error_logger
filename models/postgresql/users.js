const sequelize = require('../../db/sequelizejsConfig');
const Sequelize = require('sequelize');

const usersModel = sequelize.define('user', {
    anonymous_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    },
    lastErrorTime: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    }
});

sequelize.sync();

module.exports = usersModel;
