import models from '../models/sequelize';
export default {
    Mutation:{
        createError:  async (parent, { anonymusId, err_type, err_message }) => {
            const error = await models.Error.create({
                anonymusId, 
                err_type, 
                err_message
            });

            return error;
          }
    }
}