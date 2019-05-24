const bcrypt = require("bcrypt");

module.exports = function userModel(sequelize, DataTypes) {
  const Users = sequelize.define(
    "Users",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      // userName: DataTypes.STRING, **Resolve this naming convention
      dob: DataTypes.DATE,
      username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        set: function set(v) {
          const password = bcrypt.hashSync(v, 5);
          return this.setDataValue("password", password);
        }
      }
    },
    {
      tableName: "users",
      timestamps: true,
      underscored: false
    }
  );

  return Users;
};
