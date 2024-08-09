const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo.route.js");

require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

//middleware
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  if (err.status === 400)
    return res.status(err.status).json({ message: "Check Your JSON" });
  return next(err);
});

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to To Do List Server</h1>`);
});

app.use("/api/todo", todoRoutes);

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server active at port ${port}`);
    });
  })
  .catch((err) => console.error("Can not connect to Database", err));
