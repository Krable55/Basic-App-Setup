const db = require('../databases/postgres/config');
const { Op } = require('sequelize');
const { Users } = db;

const createUser = (data) => {
    const {
        email,
        firstName,
        lastName,
        dob,
    } = data;
    const options = {
        where: {
            email: { [Op.iLike]: email },
        },
        defaults: {
            email,
            firstName,
            lastName,
            dob,
        },
    };
    console.log(data, 'what is data in create user?!?1');
    return Users.findCreateFind(options).spread((user, create) => {
        if (create) {
            // do stuff if user is new maybe
        }
        return user.get({ plain: true });
        // figureout not created user flow
    });
};


module.exports = {
    createUser,
}