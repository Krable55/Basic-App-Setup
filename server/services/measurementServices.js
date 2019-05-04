const user = require("../databases/mongoDb/models/Users");
const bodyMeasurements = require("../databases/mongoDb/models/Measurements");
const createMeasurements = data => {
  let date = data.date;
  let dateObj = {};
  dateObj[date] = new bodyMeasurements(data.measurements);
  let query = { email: data.email };
  return user.findOneAndUpdate(query, dateObj, { upsert: true }).then(doc => {
    console.log(doc);
  });
};
module.exports = {
  createMeasurements
};
