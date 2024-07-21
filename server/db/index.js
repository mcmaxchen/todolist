const { host, user, password } = require("../config.json");

const mysql = require("mysql2/promise");

async function connection() {
  const db = await mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: "todolist",
  });

  return db;
}

module.exports = connection;
