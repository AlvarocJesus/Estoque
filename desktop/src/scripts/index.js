import selectedProducts from './ListProduct';
console.log(selectedProducts);

const addProduct = document.getElementById('adicionarProduto');
const listProduct = document.getElementById('fazerLista');

addProduct.addEventListener('click', function(){
  window.location.href = '../views/AddProduct.html';
});

listProduct.addEventListener('click', function(){
  window.location.href = '../views/ListProduct.html';
});

// api.get('list')
//   .then((res) => {
// 		const product = res.data;

// 		product.map(item => {
// 			const id = item.id;

// 			const linha = document.createElement("tr");
//       linha.setAttribute('value', id);
//       linha.addEventListener('click', function(){
//         selectedItens.push(id);
// 				console.log(selectedItens);
//       });

// 			const celula = document.createElement("td");
// 			celula.innerHTML = item.name;

// 			const celula1 = document.createElement("td");
// 			celula1.innerHTML = item.preco;

// 			const celula2 = document.createElement("td");
// 			celula2.innerHTML = item.quantidade;

// 			const celula4 = document.createElement("td");
// 			celula4.innerHTML = item.fornecedor;

// 			const celula5 = document.createElement("td");
// 			celula5.innerHTML = item.precoCusto;

// 			tabela.appendChild(linha);
// 				linha.appendChild(celula);
// 				linha.appendChild(celula1);
// 				linha.appendChild(celula2);
// 				linha.appendChild(celula4);
// 				linha.appendChild(celula5);
// 		})
// 	})
// 	.catch((err) => console.log(`Erro ${err}`));