var parse = require('postgres-date');

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
        defaultValue: parse(new Date())
    },
    lastErrorTime: {
        type: Sequelize.DATE,
        defaultValue: parse(new Date())
    }
});

module.exports = usersModel;
