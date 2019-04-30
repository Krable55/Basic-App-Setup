

module.exports = function workoutModel(sequelize, DataTypes) {
    const Workouts = sequelize.define(
        'Workouts',
        {
            name: DataTypes.STRING,
        },
        {
            tableName: 'workouts',
            timestamps: true,
            underscored: false,
        }
    );

    return Workouts;
};
