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
    }
    });
    error.associate = function(models) {
        console.log(models.error);
        models.error.belongsTo(models.user, { foreignKey: 'anonymousId', targetKey: 'anonymousId' });
    }

    return error;
}



