import models from '../models/sequelize';
import Sequelize from 'sequelize';

const toCursorHash = string => Buffer.from(string).toString('base64');
const fromCursorHash = string =>
  Buffer.from(string, 'base64').toString('ascii');

export default {
    Query:{
        users:async (parent, { cursor, limit = 100, anonymusId }) => {
            console.log(cursor);
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
      
            const users = await models.User.findAll({
              order: [['createdAt', 'DESC']],
              limit: limit + 1,
              ...cursorOptions,
            });
      
            const hasNextPage = users.length > limit;
            const edges = hasNextPage ? users.slice(0, -1) : users;
      
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
    }
}