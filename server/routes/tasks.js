const { getTasks, createTask } = require("../controllers/tasksController");

const express = require("express");
const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTask);

module.exports = router;
