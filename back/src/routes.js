const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Deu certo' });
})

routes.post('/addproducts', (req, res) => {
    const data = req.body;

    console.log(data);
    
    return res.json(data);
})

module.exports = routes;