const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getme,
  logout,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const authRouter = router;

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/getme", authMiddleware, getme);

module.exports = authRouter;
