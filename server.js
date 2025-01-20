const app = require('.');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB =
  'mongodb+srv://todo:todo@todo.9cmes.mongodb.net/Todo?retryWrites=true&w=majority&appName=todo';
mongoose
  .connect(DB)
  .then((doc) => {
    console.log('Successful');
  })
  .catch((err) => {
    console.log('Error', err);
  });

const port = 9000;
app.listen(port, () => {});
