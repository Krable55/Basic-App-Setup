module.exports = function workoutModel(sequelize, DataTypes) {
    const Workouts = sequelize.define(
        'Workouts',
        {
            id: {
                primaryKey: true,
                allowNull: false,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            exercise: DataTypes.STRING,
            userId: DataTypes.STRING,
            reps: DataTypes.INTEGER,
            weight: DataTypes.INTEGER,
        },
        {
            tableName: 'workouts',
            timestamps: true,
            underscored: false,
        }
    );

    return Workouts;
};

// id, userId, exercise, reps, weight