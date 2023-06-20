use('ecomm');
const categoriaLivroOuCelular = db.products.find(
  { $or: [{ CATEGORIA: 'LIVROS' }, { CATEGORIA: 'CELULARES' }] },
);

console.log(categoriaLivroOuCelular);
