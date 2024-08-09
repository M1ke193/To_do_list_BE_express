const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo.route.js");

require("dotenv").config();

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
  res.send(`<h1>HELLO WORLD</h1>`);
});

app.use("/api/todo", todoRoutes);

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server active at port 3000");
    });
  })
  .catch((err) => console.error("Can not connect to Database", err));
