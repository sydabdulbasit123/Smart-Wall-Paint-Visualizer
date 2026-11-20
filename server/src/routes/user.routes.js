const express = require("express");
const router = express.Router();
const {
  addFavouriteColourAndPattern,
  removeFavouriteColourAndPattern,
  getFavourites,
} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const userRouter = router;

// Add favourite
userRouter.post(
    "/favourites", 
    authMiddleware, 
    addFavouriteColourAndPattern
);

// Remove favourite
userRouter.delete(
  "/favourites",
  authMiddleware,
  removeFavouriteColourAndPattern,
);

// Fetch all fav
userRouter.get("/favourites", authMiddleware, getFavourites);

module.exports = userRouter