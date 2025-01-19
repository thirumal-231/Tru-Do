const express = require('express');
const todoController = require('./../controller/todoController');

const router = express.Router();

router.route('/add').get(todoController.addTodoForm);
router.route('/:id/edit').get(todoController.updateForm);
router
  .route('/')
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

router
  .route('/:id')
  .get(todoController.getOneTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
