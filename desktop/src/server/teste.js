const fs = require('fs');

module.exports = {
  async index() {
    fs.readFile('teste.csv', (err, data) => {
      if (err) throw err;
      return data;
    });
  },

  async create(product) {
    try {
      const { name, preco, quantidade, precoUnitario, fornecedor, precoCusto } =
        product;

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
};
