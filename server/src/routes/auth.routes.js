const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth.controller");

const authRouter = router;

authRouter.post("/register", register);
authRouter.post("/login", login);

module.exports = authRouter;
