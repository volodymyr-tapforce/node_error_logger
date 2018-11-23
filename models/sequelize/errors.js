
const error = (sequelize, DataTypes) => {

    const Error = sequelize.define('error', {

        anonymusId: {
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
        Error.belongsTo(models.User,{ foreignKey: 'anonymusId', targetKey: 'anonymusId' });
    };

    Error.defineHooks = models=>{
        Error.beforeCreate(async (errorInstance, options) => {
            const userParams = options.userParams;
            const anonymusId = errorInstance.dataValues.anonymusId;
            await models.User.findOrCreate({
                where:{anonymusId},
                defaults:{anonymusId, ...userParams}
            }).spread(async (user, created) => {
                if(user) {
                    Object.keys(userParams).forEach((key)=>{
                        user[key] = userParams[key];
                    });
                    await user.save();
                }
            })
        });
    }

    return Error;

}
export default error;


