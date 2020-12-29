import api from '../service/api.js';

const table = document.getElementById('table');

api.get('list')
    .then((res) => {
        const product = res.data;
        
        product.map(item => {
            const linha = document.createElement("tr");
            linha.addEventListener("click", function(){

                const linha2 = linha;
                linha2.addEventListener("click", function(){

                    tabela.appendChild(linha);
                })
                table.appendChild(linha2);
            })

            const celula = document.createElement("td");
            celula.innerHTML = item.name;

            const celula1 = document.createElement("td");
            celula1.innerHTML = item.preco;

            const celula2 = document.createElement("td");
            celula2.innerHTML = item.quantidade;

            const celula4 = document.createElement("td");
            celula4.innerHTML = item.fornecedor;

            const celula5 = document.createElement("td");
            celula5.innerHTML = item.precoCusto;

            tabela.appendChild(linha);
                linha.appendChild(celula);
                linha.appendChild(celula1);
                linha.appendChild(celula2);
                linha.appendChild(celula4);
                linha.appendChild(celula5);
            })
            
    })
    .catch((err) => console.log(`Erro ${err}`))