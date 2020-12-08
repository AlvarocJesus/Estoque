import api from '../service/api.js';

const name = document.getElementById('name');

const preco = document.getElementById('preco');
    
const quantidade = document.getElementById('quantidade');

const precoUnitario = document.getElementById('valor-unitario');

const fornecedor = document.getElementById('fornecedor');

const precoCusto = document.getElementById('preco-custo');

function SubmitData(){
    // alert(`produto: ${name.value} \n preco: ${preco.value} \n quantidade: ${quantidade.value} \n precoUnitario: ${precoUnitario.value} \n fornecedor: ${fornecedor.value} \n precoCusto: ${precoCusto.value} \n`);

    api.post('/add', {
        name: name,
        preco: preco,
        quantidade: quantidade,
        precoUnitario: precoUnitario,
        fornecedor: fornecedor,
        precoCusto: precoCusto,
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

// // console.log(name);
// // console.log(preco);
// // console.log(quantidade);
// // console.log(precoUnitario);
// // console.log(fornecedor);
// // console.log(precoCusto);

// api.post('/add', {
//     name: name,
//     preco: preco,
//     quantidade: quantidade,
//     precoUnitario: precoUnitario,
//     fornecedor: fornecedor,
//     precoCusto: precoCusto,
// })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
