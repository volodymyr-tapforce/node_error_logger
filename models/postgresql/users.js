
const user = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
            anonymous_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
            lastErrorTime: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            }
    });

    User.associate = models => {
        User.hasMany(models.Error,{ foreignKey: 'anonymous_id', targetKey: 'anonymous_id' });
    };

    // Error.beforeCreate(async user => {
    //     user.password = await user.generatePasswordHash();
    // });

    return User;

}
export default user;

