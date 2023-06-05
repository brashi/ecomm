use("ecomm");
var valoresEntreMilEDoisMil = db.products.find(
    {"PREÇO UNITÁRIO": {$gte: 1000, $lte: 2000}}
);

console.log(valoresEntreMilEDoisMil);