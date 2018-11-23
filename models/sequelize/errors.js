
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
        Error.beforeCreate(async (errorParams) => {
            const anonymusId = errorParams.dataValues.anonymusId;
            await models.User.findOrCreate({
                where:{anonymusId},
                defaults:{anonymusId}
            });
        });
    }

    return Error;

}
export default error;


