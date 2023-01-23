module.exports={
  async index() {
    // const products = await connection('products').select('*');
    // const products = await knex('products');
    let products;
    fs.readFile('teste.csv', (err, data) => {
      if (err) throw err;
      //   products = data;
      return data
    });
    // console.log(products);
    // return res.status(201).json(products);
  },

  async create(product) {
    try {
      // captura dos dados do corpo da requisicao
      const { name, preco, quantidade, precoUnitario, fornecedor, precoCusto } =
      product;

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
      const newData = `${name},${preco},${quantidade},${precoUnitario},${fornecedor},${precoCusto}\n`;
      fs.writeFile(
        'teste.csv',
        newData,
        { encoding: 'utf-8', flag: 'a' },
        (err) => {
          if (err) throw err;

          return 'deu certo!';
        }
      );
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
}