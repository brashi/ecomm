use('ecomm');
const produtosComBomEstoque = db.products.find(
  { 'QUANTIDADE EM ESTOQUE': { $gte: 3 } },
);

console.log(produtosComBomEstoque);
