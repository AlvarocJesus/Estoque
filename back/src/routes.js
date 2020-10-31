const express = require('express');

const ProductsController = require('./controllers/ProductsController');

const routes = express.Router();

routes.get('/', ProductsController.index);
routes.post('/addproducts', ProductsController.create);

module.exports = routes;