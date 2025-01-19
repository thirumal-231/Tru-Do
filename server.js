const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then((doc) => {
    console.log('Successful');
  })
  .catch((err) => {
    console.log('Error', err);
  });

const port = 3000;
app.listen(port, () => {});
