use("ecomm")
var categoriaLivroOuCelular = db.products.find(
    {$or: [ {"CATEGORIA": "LIVROS"}, {"CATEGORIA": "CELULARES"}]}
);

console.log(categoriaLivroOuCelular);