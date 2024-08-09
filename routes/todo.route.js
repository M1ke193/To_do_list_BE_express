const express = require("express");
const {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
} = require("../controller/todo.controller.js");

const router = express.Router();

router.get("/", getTodo);

router.get("/:id", getTodoById);

router.post("/", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
