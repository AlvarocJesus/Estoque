// const {Request, Response} = require('express');
const knex = require('../database');

module.exports = {
    async index(req, res) {
        // const products = connection('products').select('*');
        const products = await knex('products');

        return res.status(201).json(products);

    },

    async create(req, res, next) {
        try {
            // captura dos dados do corpo da requisicao
            const data = req.body;

            // insere os dados no banco de dados
            await knex('products').insert(data);

            // exibe somente o status code, quando criado
            return res.status(201).send();
        } catch (error) {
            next(error)
        }
        return res.json(data);
    },

    async update(req, res, next){
        
        try {
            const data = req.body;
            const {id} = req.params;

            await knex('products')
                .update(data)
                .where({id})

            return res.send();
        } catch (error) {
            next(error);
        }
    }
}