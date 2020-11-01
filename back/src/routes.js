const express = require('express');
const routes = express.Router();

const ProductsController = require('./controllers/ProductsController');

routes.get('/', ProductsController.index);
routes.post('/', ProductsController.create);
routes.post('/product/:id', ProductsController.update);

module.exports = routes;