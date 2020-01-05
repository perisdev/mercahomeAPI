const db = require('./models');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const citiesRouter = require('./routes/cities');
const ordersRouter = require('./routes/orders');

let app = express();

//CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, key, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH , PUT, DELETE, OPTIONS");
  next();
});

app.options('/*', (req, res) => res.send())  // response status 200 for all options. to fix options issue
// ...

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/cities', citiesRouter);
app.use('/orders', ordersRouter);

// Sync all models to mariaDB
// db.sequelize.sync({ force: true });
// Sync and modify the tables if the models change
// db.sequelize.sync({alter: true});

module.exports = app;
