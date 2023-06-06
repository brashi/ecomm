use("ecomm");

var indiceNome = db.products.createIndex(
    { "NOME": 1 }
);

var indicePreco = db.products.createIndex(
    { "PREÇO UNITÁRIO": 1 }
);

console.log("Indice por nome: ");
console.log(indiceNome);
console.log("Indice por preço: ");
console.log(indicePreco);