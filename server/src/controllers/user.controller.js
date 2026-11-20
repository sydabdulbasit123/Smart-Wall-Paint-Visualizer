const User = require("../models/user.model");

const addFavouriteColourAndPattern = async (req, res) => {
  try {
    const { colour, pattern } = req.body;

    if (!colour && !pattern) {
      return res.status(400).json({
        message: "Colour or pattern is required",
      });
    }

    const update = {};

    if (colour) {
      update.$addToSet = {
        ...update.$addToSet,
        "favourites.colours": colour,
      };
    }

    if (pattern) {
      update.$addToSet = {
        ...update.$addToSet,
        "favourites.patterns": pattern,
      };
    }

    const user = await User.findByIdAndUpdate(req.user.id, update, {
      returnDocument: "after",
      runValidators: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Favourite added successfully",
      favourites: user.favourites,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const removeFavouriteColourAndPattern = async (req, res) => {
  try {
    const { colour, pattern } = req.body;

    if (!colour && !pattern) {
      return res.status(400).json({
        message: "Colour or pattern is required",
      });
    }

    const update = {};

    if (colour) {
      update.$pull = {
        ...update.$pull,
        "favourites.colours": colour,
      };
    }

    if (pattern) {
      update.$pull = {
        ...update.$pull,
        "favourites.patterns": pattern,
      };
    }

    const user = await User.findByIdAndUpdate(req.user.id, update, {
      returnDocument: "after",
      runValidators: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Favourite removed successfully",
      favourites: user.favourites,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getFavourites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("favourites");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Favourites fetched successfully",
      favourites: user.favourites,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  addFavouriteColourAndPattern,
  removeFavouriteColourAndPattern,
  getFavourites,
};
