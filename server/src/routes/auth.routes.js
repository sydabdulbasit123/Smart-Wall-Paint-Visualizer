const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth.controller");

const authRouter = router;

authRouter.post("/register", register);

module.exports = authRouter;
