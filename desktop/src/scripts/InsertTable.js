import api from '../service/api.js';

api.get('list')
    .then((res) => {
        const product = res.data;
        const value = 0
        
        product.map(item => {
            const linha = document.createElement("tr");
            const check = document.createElement('input');
            check.type = 'checkbox';
            check.setAttribute("name", "item")
            check.value = value + 1;

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

            // check.name = celula + [];
            
            if(check.value === true){
                console.log(check.value);
                check.style.display = "none";
            }

            tabela.appendChild(linha);
                linha.appendChild(check);
                linha.appendChild(celula);
                linha.appendChild(celula1);
                linha.appendChild(celula2);
                linha.appendChild(celula4);
                linha.appendChild(celula5);
        })

    })
    .catch((err) => console.log(`Erro ${err}`))