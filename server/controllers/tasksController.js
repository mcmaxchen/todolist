const connection = require("../db");

exports.getTasks = async (req, res) => {
  const db = await connection();
  const [tasks] = await db.query("SELECT * FROM tasks");

  if (!tasks) {
    return res.status(400).send({ message: "It seems there was an error" });
  }

  res.status(200).send(tasks);
};

exports.getTaskById = async (req, res) => {
  const db = await connection();
  const { id } = req.params;

  const [task] = await db.query("SELECT * FROM tasks WHERE id = ?", [id]);

  if (!task) {
    return res.status(404).send({ message: "This task does not exist" });
  }

  res.status(200).send(task[0]);
};

exports.createTask = async (req, res) => {
  const db = await connection();
  const { title, description, duedate, status } = req.body;

  const [insert] = await db.query(
    "INSERT INTO tasks (title, description, duedate, status) VALUES (?, ?, ?, ?)",
    [title, description, duedate, status]
  );

  if (insert?.insertId === null) {
    return res.status(401).send({ message: "It seems an error occured" });
  }

  res
    .status(200)
    .send({ id: insert.insertId, message: "Task created successfully" });
};

exports.updateTask = async (req, res) => {
  const db = await connection();

  const { id } = req.params;
  const { title, description, duedate, status } = req.body;

  const [update] = await db.query(
    "UPDATE tasks SET title = (?), description = (?), duedate = (?), status = (?) WHERE id = (?)",
    [title, description, duedate, status, id]
  );

  if (!update) {
    return res
      .status(400)
      .send({ message: "An error occurred while updating the task" });
  }

  res.status(200).send({ message: "Task updated" });
};

exports.deleteTask = async (req, res) => {
  const db = await connection();
  const { id } = req.params;

  const [remove] = db.query("DELETE FROM tasks WHERE id = (?)", [id]);

  if (!remove) {
    return res
      .status(401)
      .send({ message: "An error occurred while deleting the task" });
  }

  res.status(200).send({ message: "Task deleted" });
};
