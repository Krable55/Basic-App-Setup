const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("workouts", "postgres", "null", {
  host: process.env.DATABASE_URL,
  port: 5432,
  protocol: "postgres",
  dialect: "postgres",
  native: false,
  logging: false,
  freezeTableName: true,
  underscored: false,
  dialectOptions: {
    ssl: true
  },
  define: {
    timestamps: false
  },
  operatorAliases: false,
  pool: {
    max: 9,
    min: 0,
    idle: 10000,
    aquire: 300000
  }
});

const db = {};
const dataPath = path.join(__dirname, "models");

fs.readdirSync(dataPath).forEach(file => {
  const model = sequelize.import(path.join(dataPath, file));
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
