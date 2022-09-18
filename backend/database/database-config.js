// mongoose
const mongoose = require("mongoose");

// databaseconnection function
const dbConnection = async () => {
  try {
    // connection using mongoose
    await mongoose.connect(process.env.DDBB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database online!");
  } catch (error) {
    console.log(error);
    throw new Error("Error Initializing Database!");
  }
};

module.exports = { dbConnection };
