const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);

    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    // Throw error to let the caller handle it appropriately
    throw error;
  }
};

module.exports = connectDb;
