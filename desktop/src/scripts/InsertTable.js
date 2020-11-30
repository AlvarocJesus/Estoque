import api from '../service/api.js';
// const api = require('../service/api.js');

api.get('/list')
    .then((res) => {
        const { name, preco, precoCusto, precoUnitario, quantidade, fornecedor } = res.data;

        console.log(res)
        
        const tabela = document.getElementById('tabela');

        const linha = document.createElement("tr");

        const celula = document.createElement("td");
        celula.innerHTML = name;
        celula.innerHTML = preco;
        celula.innerHTML = quantidade;
        celula.innerHTML = precoUnitario;
        celula.innerHTML = fornecedor;
        celula.innerHTML = precoCusto;

        tabela.appendChild(linha);
            linha.appendChild(celula);

    })
    // .catch((err) => console.log(`Erro ${err}`))
