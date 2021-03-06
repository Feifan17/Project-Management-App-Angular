const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  _projectId: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema);
