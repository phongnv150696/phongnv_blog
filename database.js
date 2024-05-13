const mongoose = require("mongoose");

module.exports = async function connectDatabase(callback) {
  try {
    await mongoose.connect(process.env.DB_URL, {});
    console.log("Connected to database.");
    callback();
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to database.");
  }
};
