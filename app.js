const express = require('express');
const methodOverride = require('method-override');
const app = express();

const todoRouter = require('./routes/todoRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use('/todos', todoRouter);

module.exports = app;
