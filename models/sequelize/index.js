import Sequelize from 'sequelize';

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
  });
} else {
  sequelize = new Sequelize('apollo', 'postgres', 'webdev`8', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
});
}

const models = {
  User: sequelize.import('./users'),
  Error: sequelize.import('./errors'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
  if ('defineHooks'in models[key]){
    models[key].defineHooks(models);
  }
});

export { sequelize };

export default models;