const winston = require("winston");
const mongoose = require("mongoose");
const settings = require('../config/settings')

winston.info(`${settings.databaseUrl}/app?authSource=admin`);

// Connect to MongoDB
module.exports = function () {
  mongoose
    .connect(`${settings.databaseUrl}/app?authSource=admin`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      winston.info("Connected to Mongodb");
    })
    .catch((err) =>
      winston.error("Could not connect to Mongodb database: ", err)
    );
};
