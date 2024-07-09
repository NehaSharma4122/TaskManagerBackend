const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const task = require("./models/task");
const user = require("./models/user");

const cors = require("cors");
const UserAPI = require("./routes/user");
const TaskAPI = require("./routes/task");

//const path = require("path");

app.use(cors());
app.use(express.json());

app.use("/api/v1", UserAPI);
app.use(express.json());
app.use("/api/v2", TaskAPI);

const PORT = 1000;

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log("Server started");
});
