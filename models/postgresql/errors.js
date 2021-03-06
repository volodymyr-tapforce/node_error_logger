const sequelize = require('../../db/sequelizejsConfig');
const Sequelize = require('sequelize');

const errorsModel = sequelize.define('error', {
    anonymous_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    err_type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    err_message: {
        type: Sequelize.STRING(1234),
        allowNull: false,
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    }
});

sequelize.sync();

module.exports = errorsModel;


