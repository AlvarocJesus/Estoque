import api from '../service/api.js';
import selectedProducts from './ListProduct';
console.log(selectedProducts);

const finishBuy = document.getElementById('finishBuy');
const name = document.getElementById('name');
const preco = document.getElementById('preco');
const quantidade = document.getElementById('quantidade');
const precoUnitario = document.getElementById('valor-unitario');
const fornecedor = document.getElementById('fornecedor');
const precoCusto = document.getElementById('preco-custo');
const btn_addProduct = document.getElementById('btn_addProduct');
const selectedItens = [];

// btn_addProduct.addEventListener('click', addProduct);

btn_addProduct.onclick = function addProduct(e) {
  e.preventDefault();

    const newData = `${name.value},${preco.value},${quantidade.value},${precoUnitario.value},${fornecedor.value},${precoCusto.value}\n`;
    fs.writeFile(
      `../../produtos.csv`,
      newData,
      { encoding: 'utf-8', flag: 'a' },
      (err) => {
        if (err) console.log(err);

        return 'Produto cadastrado com sucesso';
      }
    );
}

function getProduct(e) {
  e.preventDefault();

  try {
    fs.readFile('produtos.csv', (err, data) => {
      if (err) throw err;
      const product = res.data;

      product.map((item) => {
        const id = item.id;

        const linha = document.createElement('tr');
        linha.setAttribute('value', id);
        linha.addEventListener('click', function () {
          selectedItens.push(id);
          console.log(selectedItens);
        });

        const celula = document.createElement('td');
        celula.innerHTML = item.name;

        const celula1 = document.createElement('td');
        celula1.innerHTML = item.preco;

        const celula2 = document.createElement('td');
        celula2.innerHTML = item.quantidade;

        const celula4 = document.createElement('td');
        celula4.innerHTML = item.fornecedor;

        const celula5 = document.createElement('td');
        celula5.innerHTML = item.precoCusto;

        tabela.appendChild(linha);
        linha.appendChild(celula);
        linha.appendChild(celula1);
        linha.appendChild(celula2);
        linha.appendChild(celula4);
        linha.appendChild(celula5);
      });
      // return data;
    });
  } catch (err) {
    console.log(err);
  }
}

module.export = selectedItens;
