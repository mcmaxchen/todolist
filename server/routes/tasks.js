const {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
} = require("../controllers/tasksController");

const express = require("express");
const router = express.Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTaskById);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

module.exports = router;
