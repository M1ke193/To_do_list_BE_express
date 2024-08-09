const todoModel = require("../model/todo.model");

//create
const createTodo = async (req, res) => {
  try {
    const todo = await todoModel.create(req.body);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//read
const getTodo = async (req, res) => {
  try {
    const todo = await todoModel.find({});
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!todo) {
      return res.status(404).json({ message: "The Id of Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.findByIdAndDelete(id, req.body, { new: true });
    if (!todo) {
      return res.status(404).json({ message: "The Id of Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
};
