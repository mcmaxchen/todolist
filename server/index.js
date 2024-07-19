const { host, user, password } = require("./config.json");

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

// Utilisation de CORS pour permettre la communication à l'aide de localhost
app.use(cors());

// Uitilisation de URLEncoded et JSON pour gérer les Request Object des requêtes de type POST
app.use(express.urlencoded());
app.use(express.json());

// Connection with the DB

const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: "todolist",
});

// Routes
app.use("/api", require("./routes/tasks"));

app.listen(8000, () => console.log("Server listening on port 8000"));
