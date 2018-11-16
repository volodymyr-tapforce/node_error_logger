const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'postgres', 'webdev`8', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
});

module.exports = sequelize;