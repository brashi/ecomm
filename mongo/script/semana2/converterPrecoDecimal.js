use('ecomm');
const converter = db.products.updateMany(
  {},
  [{ $set: { 'PREÇO UNITÁRIO': { $toDecimal: '$PREÇO UNITÁRIO' } } }],
);
const truncar = db.products.updateMany(
  {},
  [{ $set: { 'PREÇO UNITÁRIO': { $trunc: ['$PREÇO UNITÁRIO', 2] } } }],
);

console.log('-=-=-=-=-=-=- Resultado da conversão: ');
console.log(converter);
console.log('-=-=-=-=-=-=- Resultado da truncagem: ');
console.log(truncar);
