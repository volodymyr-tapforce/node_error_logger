/**
 * postgraphile
 * Column names are changed to camelCase: created_at → createdAt
 * 
 * any table that has a primary key will automatically have a unique nodeId field available for queries and mutations
 */
module.exports = (sequelize, DataTypes) =>{
    const user = sequelize.define('user', {
    anonymousId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userId: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    lastErrorTime: {
        type: DataTypes.DATE,
        defaultValue: new Date()
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

    user.associate = function(models) {
        models.user.hasMany(models.error, { foreignKey: 'anonymousId', sourceKey: 'anonymousId' });
    }

    return user;
}

