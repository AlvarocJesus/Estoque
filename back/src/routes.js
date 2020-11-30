const express = require('express');
const routes = express.Router();

const ProductsController = require('./controllers/ProductsController');

routes.get('/list', ProductsController.index);
routes.post('/add', ProductsController.create);
// routes.post('/product/:id', ProductsController.update);

module.exports = routes;