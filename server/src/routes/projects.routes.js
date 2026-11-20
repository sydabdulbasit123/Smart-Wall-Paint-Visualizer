const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.middleware");
const {
  createProject,
  getProjects,
  getSingleProject,
  updateProject,
  deleteProject,
  saveVisualizer,
  getVisualizer,
  resetVisualizer
} = require("../controllers/project.controller");

const projectRouter = router;

const authMiddleware = require("../middlewares/auth.middleware");

projectRouter.post(
  "/create",
  authMiddleware,
  upload.single("image"),
  createProject,
);
projectRouter.get("/all", authMiddleware, getProjects);
projectRouter.get("/:id", authMiddleware, getSingleProject);
projectRouter.patch("/:id", authMiddleware, updateProject);
projectRouter.delete("/:id", authMiddleware, deleteProject);
projectRouter.patch("/:id/visualize", authMiddleware, saveVisualizer);
projectRouter.get("/:id/visualize", authMiddleware, getVisualizer);
projectRouter.patch("/:id/visualize/reset", authMiddleware, resetVisualizer);


module.exports = projectRouter;
