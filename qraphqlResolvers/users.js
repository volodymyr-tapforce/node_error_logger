import models from '../models/sequelize';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;


const toCursorHash = string => Buffer.from(string).toString('base64');
const fromCursorHash = string =>
  Buffer.from(string, 'base64').toString('ascii');

export default {
    Query:{
        users:async (parent, { cursor, limit = 100, user_id, email }) => {
            user_id = user_id || '';
            email = email || '';
            const cursorOptions = cursor
              ? {
                  where: {
                    createdAt: {
                      [Sequelize.Op.lt]: fromCursorHash(cursor),
                    },
                    user_id: {
                        [Op.like]: `%${user_id}%`
                    },
                    email: {
                        [Op.like]: `%${email}%`
                    }
                  },
                }
              : {
                  where: {
                    user_id: {
                        [Op.like]: `%${user_id}%`
                    },
                    email: {
                        [Op.like]: `%${email}%`
                    }
                  }
              };
            
            const users = await models.User.findAll({
              order: [['lastErrorTime', 'DESC']],
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
                  edges[edges.length - 1].lastErrorTime.toString(),
                ),
              },
            };
        }
    }
}