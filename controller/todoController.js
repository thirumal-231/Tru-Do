const Todo = require('../model/todoModel');
let allTodos;

exports.addTodoForm = (req, res) => {
  res.render('addForm');
};

exports.updateForm = async (req, res) => {
  try {
    const todoToEdit = await Todo.findById(req.params.id);
    res.render('editForm', { todoToEdit });
  } catch (err) {
    console.log('Error occurred in updateForm', err);
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    allTodos = await Todo.find();
    // console.log(allTodos);
    res.render('home', { allTodos });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getOneTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.render('view', { todo });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    console.log(todo);
    res.redirect('/todos');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.redirect('/todos');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect('/todos');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
