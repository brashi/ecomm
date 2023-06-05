use("ecomm");

var indiceCategoria = db.products.createIndex(
    { "NOME": 1, "CATEGORIA": 1 }
);

var indicePreco = db.products.createIndex(
    { "NOME": 1, "PREÇO UNITÁRIO": 1 }
);

console.log("Indice por categoria e nome de produto: ");
console.log(indiceCategoria);
console.log("Indice por nome de produto e preço: ");
console.log(indicePreco);