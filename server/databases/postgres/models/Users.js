const bcrypt = require('bcrypt');


module.exports = function userModel(sequelize, DataTypes) {
    const Users = sequelize.define(
        'Users',
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            dob: DataTypes.DATE,
            email: {
                type: DataTypes.STRING,
                validate: { isEmail: true },
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                set: function set(v) {
                    const password = bcrypt.hashSync(v, 5);
                    return this.setDataValue('password', password);
                },
            },

        },
        {
            tableName: 'users',
            timestamps: true,
            underscored: false,
        }
    );

    return Users;
};
