// const {Request, Response} = require('express');
const knex = require('../database/connection');

module.exports = {
    async index(req, res) {
        // const products = await connection('products').select('*');
        const products = await knex('products');
        console.log(products);
        return res.status(201).json(products);

    },

    async create(req, res, next) {
        // const data = req.body;
        // return res.json(data);
        try {
            // captura dos dados do corpo da requisicao
            const { 
                name,
                preco,
                quantidade,
                precoUnitario,
                fornecedor,
                precoCusto
            } = req.body;

            // insere os dados no banco de dados
            await knex('products').insert({
                name,
                preco,
                quantidade,
                precoUnitario,
                fornecedor,
                precoCusto
            });

            // exibe somente o status code, quando criado
            return res.status(201).send();
        } catch (error) {
            next(error)
        }
        
    },

    // async update(req, res, next){
        
    //     try {
    //         const data = req.body;
    //         const {id} = req.params;

    //         await knex('products')
    //             .update(data)
    //             .where({id})

    //         return res.send();
    //     } catch (error) {
    //         next(error);
    //     }
    // }
}