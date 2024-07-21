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
  const { id } = req.body;

  const [task] = await db.query("SELECT * FROM task WHERE id = ?", [id]);

  if (!task) {
    return res.status(404).send({ message: "This task does not exist" });
  }

  res.status(200).send(task);
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
