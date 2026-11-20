const Project = require("../models/project.model");
const imagekit = require("../config/imagekit");

const createProject = async (req, res) => {
  try {
    const { name } = req.body;

    // Validate project name
    if (!name || !name.trim()) {
      return res.status(400).json({
        message: "Project name is required",
      });
    }

    // Validate image
    if (!req.file) {
      return res.status(400).json({
        message: "Please upload an image",
      });
    }

    // Upload image to ImageKit
    const result = await imagekit.upload({
      file: req.file.buffer,
      fileName: `${Date.now()}-${req.file.originalname}`,
      folder: "/wallstudio",
    });

    // Save project in MongoDB
    const project = await Project.create({
      name: name.trim(),
      image_url: result.url,
      user: req.user.id,
      image_file_id: result.fileId,
    });

    return res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    console.log("Create project error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      message: "Projects fetched successfully",
      projects,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getSingleProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findOne({
      _id: id,
      user: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(200).json({
      message: "Project fetched successfully",
      project,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, details } = req.body;

    const project = await Project.findOne({
      _id: id,
      user: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    if (name !== undefined) {
      project.name = name;
    }

    if (details) {
      project.details = {
        ...project.details.toObject(),
        ...details,
      };
    }

    await project.save();

    return res.status(200).json({
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    console.log("Update project error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findOne({
      _id: id,
      user: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    // Delete image from ImageKit
    await imagekit.deleteFile(project.image_file_id);

    // Delete project from MongoDB
    await Project.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.log("Delete project error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const saveVisualizer = async (req, res) => {
  try {
    const { id } = req.params;
    const { colour, opacity, painted_image_url } = req.body;

    // Validation
    if (!colour || opacity === undefined) {
      return res.status(400).json({
        message: "Colour and opacity are required",
      });
    }

    // Find project
    const project = await Project.findOne({
      _id: id,
      user: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    // Update visualizer
    project.visualizer.colour = colour;
    project.visualizer.opacity = opacity;

    if (painted_image_url !== undefined) {
      project.visualizer.painted_image_url = painted_image_url;
    }

    await project.save();

    return res.status(200).json({
      message: "Visualizer saved successfully",
      visualizer: project.visualizer,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getVisualizer = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findOne({
      _id: id,
      user: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(200).json({
      message: "Visualizer fetched successfully",
      visualizer: project.visualizer,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const resetVisualizer = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findOne({
      _id: id,
      user: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    project.visualizer = {
      painted_image_url: "",
      colour: "#FFFFFF",
      opacity: 1,
    };

    await project.save();

    return res.status(200).json({
      message: "Visualizer reset successfully",
      visualizer: project.visualizer,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createProject,
  getProjects,
  getSingleProject,
  updateProject,
  deleteProject,
  saveVisualizer,
  getVisualizer,
  resetVisualizer
};
