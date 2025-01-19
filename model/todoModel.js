const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A todo must have a title'],
    unique: true,
  },
  priority: {
    type: String,
    default: 'low',
  },
  description: {
    type: String,
    default: 'todo added',
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
