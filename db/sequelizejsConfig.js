const Sequelize = require('sequelize');

// const sequelize = new Sequelize('test', 'postgres', 'webdev`8', {
//     host: 'localhost',
//     dialect: 'postgres',
//     operatorsAliases: false,
// });

const sequelize = new Sequelize('d3irhto7nrvn23', 'qflavxhbvejvod', '2724ac590e01525e8274feb9f9020f8c15576c4c6b7a4f91a1a14891742b505b', {
    host: 'ec2-54-246-85-234.eu-west-1.compute.amazonaws.com',
    dialect: 'postgres',
    operatorsAliases: false,
});

module.exports = sequelize;