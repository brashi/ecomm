use('ecomm');
const ativacao = db.categories.updateOne(
  { nome: 'ESPORTE' },
  { $set: { status: 'ATIVA' } },
);
console.log(ativacao);
