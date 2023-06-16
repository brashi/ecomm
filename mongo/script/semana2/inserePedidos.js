use('ecomm');
config.set('inspectDepth', 100);
db.setLogLevel(0);
const insercoes = db.orders.insertMany(
  [
    {
      account: {
        accountId: ObjectId('6480e8a870f4c72aff5a657c'),
        nomeCliente: 'Taeltido',
      },
      dataPedido: new Date(),
      enderecoEntrega: {
        rua: 'Rua São Pedro',
        bairro: 'Nova República',
        numero: '911',
        cep: '65090385',
        cidade: 'São Luís',
        uf: 'MA',
        complemento: null,
      },
      itens:
                [
                  {
                    productId: ObjectId('647a033d245da0b860c67c32'),
                    quantidade: 1,
                    precoUnitario: Decimal128('9176.00'),
                  },
                ],
    },
    {
      account: {
        accountId: ObjectId('6480e8a870f4c72aff5a657d'),
        nomeCliente: 'Joao Pedro',
      },
      dataPedido: new Date(),
      enderecoEntrega: {
        rua: 'Rua Maranatha',
        bairro: 'Petrópolis',
        numero: '91334',
        cep: '57062005',
        cidade: 'Maceió',
        uf: 'AL',
        complemento: 'Complemento adicionado',
      },
      itens:
                [
                  {
                    productId: ObjectId('647a033d245da0b860c67c37'),
                    quantidade: 1,
                    precoUnitario: Decimal128('8549.10'),
                  },
                ],
    },
  ],
);

// let invalido = db.orders.insertOne({
//     account: {
//         accountId: ObjectId('6480e8a870f4c72aff5a657c'),
//         nomeCliente: "Taeltido"
//     },
//     dataPedido: new Date(),
//     enderecoEntrega: {
//         rua: "Rua São Pedro",
//         bairro: "Nova República",
//         numero: "911",
//         cep: "65090385",
//         cidade: "São Luís",
//         uf: "MA",
//         complemento: null
//     },
//     itens:
//         [

//         ]
// });

console.log(insercoes);
