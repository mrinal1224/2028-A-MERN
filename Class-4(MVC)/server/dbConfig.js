const mongoose = require("mongoose");

function connectDB(dbUrl) {
  return mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Db Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  connectDB,
};
