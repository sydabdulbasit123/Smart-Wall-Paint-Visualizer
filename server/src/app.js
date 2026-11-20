const express = require("express");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes");
const projectRouter = require("./routes/projects.routes");
const userRouter = require("./routes/user.routes");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/project", projectRouter);
app.use("/api/user", userRouter);

module.exports = app;
