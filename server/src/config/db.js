const mongooes = require("mongoose");

const connectDB = async () => {
  try {
    await mongooes.connect(process.env.MONGO_URI);
    console("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB