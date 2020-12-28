import api from '../service/api.js';

api.get('list')
    .then((res) => {
        const product = res.data;
        
        product.map(item => {
            const id = item.id;
            const select = document.getElementById("product");

            const option = document.createElement("option");
            option.setAttribute("value", id)
            option.innerHTML = item.name;
            

            select.appendChild(option);

            select.addEventListener('change', function(id){
                // alert(this.value);

                const linha = document.createElement("tr");

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
            // const value = select.options[select.selectedIndex].value;
            

            // const linha = document.createElement("tr");

            // const celula = document.createElement("td");
            // celula.innerHTML = item.name;
            

            // const celula1 = document.createElement("td");
            // celula1.innerHTML = item.preco;

            // const celula2 = document.createElement("td");
            // celula2.innerHTML = item.quantidade;

            // const celula4 = document.createElement("td");
            // celula4.innerHTML = item.fornecedor;

            // const celula5 = document.createElement("td");
            // celula5.innerHTML = item.precoCusto;


            // tabela.appendChild(linha);
            //     linha.appendChild(celula);
            //     linha.appendChild(celula1);
            //     linha.appendChild(celula2);
            //     linha.appendChild(celula4);
            //     linha.appendChild(celula5);
        })

    })
    .catch((err) => console.log(`Erro ${err}`))