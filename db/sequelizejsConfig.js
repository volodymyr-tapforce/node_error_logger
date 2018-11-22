const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(module.filename);
const db        = {};

const sequelize = new Sequelize('sequlizeGraphile', 'postgres', 'webdev`8', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false
});
// Models defination from models folders
fs
  .readdirSync(path.join(__dirname, '/../models/postgresql/'))
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, '/../models/postgresql/', file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// triggers defination
fs
  .readdirSync(path.join(__dirname, '/triggers/'))
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    require(path.join(__dirname, '/triggers/', file))(sequelize);
  });


db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;