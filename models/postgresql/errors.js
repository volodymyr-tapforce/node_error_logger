
const error = (sequelize, DataTypes) => {

    const Error = sequelize.define('error', {

        anonymous_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        err_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        err_message: {
            type: DataTypes.STRING(1234),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        }

    });

    Error.associate = models => {
        Error.belongsTo(models.User,{ foreignKey: 'anonymous_id', targetKey: 'anonymous_id' });
    };

    // Error.beforeCreate(async user => {
    //     user.password = await user.generatePasswordHash();
    // });

    return Error;

}
export default error;


