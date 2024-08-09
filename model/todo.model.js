const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter Title"],
    },

    description: {
      type: String,
      required: [true, "Please enter Description"],
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ToDo", toDoSchema);
