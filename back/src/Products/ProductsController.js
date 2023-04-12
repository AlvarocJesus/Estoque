const knex = require('../database/connection');
// const { testeArquivo } = require('./testeArquivo');
const fs = require('fs');
const ProductService = require('./ProductService');

module.exports = {
  async index(req, res) {
    const data = ProductService.index();
    return res
      .status(201)
      .set({ 'Content-Type': 'text/plain' /* 'text/json' */ })
      .send(data);
  },

  async create(req, res, next) {
    try {
      // captura dos dados do corpo da requisicao
      const product = req.body;

      // insere os dados no banco de dados
      /* await knex('products').insert({
                name,
                preco,
                quantidade,
                precoUnitario,
                fornecedor,
                precoCusto
            });

            // exibe somente o status code, quando criado
            return res.status(201).send(); */
      // const data = 'name,preco,quantidade,precoUnitario,fornecedor,precoCusto';
      return ProductService.create(product);
    } catch (error) {
      next(error);
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
};
