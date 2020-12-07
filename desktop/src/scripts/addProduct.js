import api from '../service/api.js';

const name = document.getElementById('name').value;

const preco = parseInt(document.getElementById('preco').value); //numerico
    
const quantidade = parseInt(document.getElementById('quantidade').value); //numerico

const precoUnitario = parseInt(document.getElementById('valor-unitario').value); //numerico

const fornecedor = document.getElementById('fornecedor').value;

const precoCusto = parseInt(document.getElementById('preco-custo').value); //numerico


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

    // "fornecedor", "name", "preco", "precoCusto", "precoUnitario", "quantidade"
    
    /* async function SubmitData(){
        await api.post('/add', {
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
    SubmitData(); */