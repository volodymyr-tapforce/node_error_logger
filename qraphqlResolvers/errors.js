import models from '../models/sequelize';
import Sequelize from 'sequelize';

const toCursorHash = string => Buffer.from(string).toString('base64');
const fromCursorHash = string =>
  Buffer.from(string, 'base64').toString('ascii');

export default {
    Query:{
        errors:async (parent, { cursor, limit = 100, anonymusId }) => {
            const cursorOptions = cursor
              ? {
                  where: {
                    createdAt: {
                      [Sequelize.Op.lt]: fromCursorHash(cursor),
                    },
                    anonymusId:anonymusId
                  },
                }
              : {where:{anonymusId}};
      
            const errors = await models.Error.findAll({
              order: [['createdAt', 'DESC']],
              limit: limit + 1,
              ...cursorOptions,
            });
      
            const hasNextPage = errors.length > limit;
            const edges = hasNextPage ? errors.slice(0, -1) : errors;
      
            return {
              edges,
              pageInfo: {
                hasNextPage,
                endCursor: toCursorHash(
                  edges[edges.length - 1].createdAt.toString(),
                ),
              },
            };
        }
    },
    Mutation:{
        createError:  async (parent, { anonymusId, err_type, err_message, userParams }) => {
            
            const params = userParams||{};
            const error = await models.Error.create({
                anonymusId, 
                err_type, 
                err_message,
            },{
                userParams:params
            });

            return error;
          }
    }
}