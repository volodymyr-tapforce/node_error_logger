/**
 * postgraphile
 * Column names are changed to camelCase: created_at → createdAt
 * 
 * any table that has a primary key will automatically have a unique nodeId field available for queries and mutations
 */
module.exports = (sequelize, DataTypes) =>{
    const error = sequelize.define('error', {
    anonymousId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    errType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    errMessage: {
        type: DataTypes.STRING(1234),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
    });
    error.associate = function(models) {
        models.error.belongsTo(models.user, { foreignKey: 'anonymousId', targetKey: 'anonymousId' });
    }

    // error.addHooks = function(models){
    //     console.log(models.error.hooks.beforeCreate);
    // }

    return error;
}



