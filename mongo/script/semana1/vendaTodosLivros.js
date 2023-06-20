use('ecomm');
const venderTodosLivros = db.products.updateMany(
  { CATEGORIA: 'LIVROS' },
  { $set: { 'QUANTIDADE EM ESTOQUE': 0 } },
);

console.log(venderTodosLivros);
