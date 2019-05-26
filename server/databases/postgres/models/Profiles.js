module.exports = function profileModel(sequelize, DataTypes) {
  const Profiles = sequelize.define(
    "Profiles",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true
      },
      email: DataTypes.STRING,
      age: DataTypes.INTEGER,
      bmi: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      targetWeight: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      goal: DataTypes.STRING,
      bio: DataTypes.STRING,
      handle: DataTypes.STRING,
      completed: DataTypes.INTEGER
    },
    {
      tableName: "profiles",
      timestamps: false
    }
  );

  return Profiles;
};
