const app = require("./src/app.js");
const connectDB = require("./src/config/db.js");
const dotenv = require("dotenv");
dotenv.config();

port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log("sever is running is on ", port, "port");
});
