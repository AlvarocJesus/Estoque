import api from '../service/api.js';

const name = document.getElementById('name');
const preco = document.getElementById('preco');
const quantidade = document.getElementById('quantidade');
const precoUnitario = document.getElementById('valor-unitario');
const fornecedor = document.getElementById('fornecedor');
const precoCusto = document.getElementById('preco-custo');

const btn = document.getElementById('btn');
btn.addEventListener('click', SubmitData);

function SubmitData(){

    api.post('/add', {
        name: name.value,
        preco: preco.value,
        quantidade: quantidade.value,
        precoUnitario: precoUnitario.value,
        fornecedor: fornecedor.value,
        precoCusto: precoCusto.value,
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
