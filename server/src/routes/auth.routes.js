const express = require("express");
const router = express.Router();
const { register, login, getme } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const authRouter = router;

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/getme", authMiddleware, getme);

module.exports = authRouter;
