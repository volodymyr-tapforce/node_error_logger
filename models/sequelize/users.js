
const user = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
            anonymusId: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            user_id: {
                type: DataTypes.STRING,
                defaultValue:''
            },
            email: {
                type: DataTypes.STRING,
                defaultValue:''
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
        User.hasMany(models.Error,{ foreignKey: 'anonymusId', sourceKey: 'anonymusId' });
    };

    // Error.beforeCreate(async user => {
    //     user.password = await user.generatePasswordHash();
    // });

    return User;

}
export default user;

