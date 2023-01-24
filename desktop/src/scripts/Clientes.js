import api from '../service/api.js';
import selectedProducts from './ListProduct';
console.log(selectedProducts);

const finishBuy = document.getElementById('finishBuy');
const name = document.getElementById('name').value;
const preco = document.getElementById('preco').value;
const quantidade = document.getElementById('quantidade').value;
const precoUnitario = document.getElementById('valor-unitario').value;
const fornecedor = document.getElementById('fornecedor').value;
const precoCusto = document.getElementById('preco-custo').value;
const btn = document.getElementById('btn');
const selectedItens = [];

btn.addEventListener('click', SubmitData);

function addProduct(e) {
  e.preventDefault();

  try {
    const newData = `${name},${preco},${quantidade},${precoUnitario},${fornecedor},${precoCusto}\n`;
    fs.writeFile(
      `/clientes/${name}.csv`,
      newData,
      { encoding: 'utf-8', flag: 'a' },
      (err) => {
        if (err) throw err;

        return 'Produto cadastrado com sucesso';
      }
    );
  } catch (err) {
    console.log(err);
  }
}

function getProduct(e, name) {
  e.preventDefault();

  try {
    fs.readFile(`/clientes/${name}.csv`, (err, data) => {
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
