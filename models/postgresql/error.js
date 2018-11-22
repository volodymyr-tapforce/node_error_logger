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

    return error;
}



