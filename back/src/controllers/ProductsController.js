const {Request, Response} = require('express');
const knex = require('../database');

module.exports = {
    index(req=Request, res=Response) {
        const products = connection('products').select('points.*');
        // const products = knex('users');

        return res.status(201).json(products);

    },

    create(req=Request, res=Response) {
        const data = req.body;

        // insere os dados no banco de dados
        // knex.insert(data);

        return res.status(201).json(data);
    },

    // update(req, res){

    // }
}