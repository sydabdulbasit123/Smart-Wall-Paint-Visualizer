const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    image_url: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    details: {
      colour: {
        type: String,
      },

      hex: {
        type: String,
      },

      opacity: {
        type: Number,
        min: 0,
        max: 1,
        default: 1,
      },
    },

    image_file_id: {
      type: String,
      required: true,
    },

    visualizer: {
      painted_image_url: {
        type: String,
        default: "",
      },
      colour: {
        type: String,
        default: "#FFFFFF",
      },
      opacity: {
        type: Number,
        default: 1,
        min: 0,
        max: 1,
      },
    },
  },
  { timestamps: true },
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
