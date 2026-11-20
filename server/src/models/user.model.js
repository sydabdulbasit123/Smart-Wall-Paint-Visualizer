const mongooes = require("mongoose");

const UserSchema = new mongooes.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    saved_project: {
      type: mongooes.Schema.Types.ObjectId,
      ref: "Project",
    },
    favourites: {
      colours: {
        type: [String],
        default: [],
      },

      patterns: {
        type: [String],
        default: [],
      },
    },
  },
  { timestamps: true },
);

const User = mongooes.model("User", UserSchema);

module.exports = User;
