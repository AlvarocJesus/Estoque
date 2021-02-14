const addProduct = document.getElementById('adicionarProduto');
const listProduct = document.getElementById('fazerLista');

addProduct.addEventListener('click', function(){
  window.location.href = '../views/AddProduct.html';
});

listProduct.addEventListener('click', function(){
  window.location.href = '../views/ListProduct.html';
});