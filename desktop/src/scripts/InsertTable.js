import api from '../service/api.js';

api.get('list')
    .then((res) => {
        const { name, preco, precoCusto, precoUnitario, quantidade, fornecedor } = res.data;

        const tabela = document.getElementById('tabela');

        const linha = document.createElement("tr");

        const celula = document.createElement("td");
        celula.innerHTML = name;

        const celula1 = document.createElement("td");
        celula1.innerHTML = preco;

        const celula2 = document.createElement("td");
        celula2.innerHTML = quantidade;

        const celula4 = document.createElement("td");
        celula4.innerHTML = fornecedor;

        const celula5 = document.createElement("td");
        celula5.innerHTML = precoCusto;

        tabela.appendChild(linha);
            linha.appendChild(celula);
            linha.appendChild(celula1);
            linha.appendChild(celula2);
            linha.appendChild(celula4);
            linha.appendChild(celula5);

    })
    .catch((err) => console.log(`Erro ${err}`))
