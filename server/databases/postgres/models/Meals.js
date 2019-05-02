module.exports = function mealsModel(sequelize, DataTypes) {
  const Meals = sequelize.define(
    "Meals",
    {
      name: DataTypes.STRING,
      calories: DataTypes.INTEGER,
      protien: DataTypes.INTEGER,
      carbs: DataTypes.INTEGER,
      fats: DataTypes.INTEGER
    },
    {
      tableName: "meals",
      timestamps: true,
      underscored: false
    }
  );

  return Meals;
};
