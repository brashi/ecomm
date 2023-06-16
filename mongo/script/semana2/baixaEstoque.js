use('ecomm');

const produto = db.products.findOne({ NOME: 'Galaxy Tab S8' });
const estoque = produto['QUANTIDADE EM ESTOQUE'];

if (estoque >= 2) {
  const clienteDoPedido = db.accounts.findOne({ nome: 'Taeltido' });

  const pedidoFeito = db.orders.insertOne(
    {
      account: {
        accountId: clienteDoPedido._id,
        nomeCliente: clienteDoPedido.nome,
      },
      dataPedido: new Date(),
      enderecoEntrega: clienteDoPedido.endereco,
      itens: [
        {
          productId: produto._id,
          quantidade: 2,
          precoUnitario: produto['PREÇO UNITÁRIO'],
        },
      ],
    },
  );

  const atualizarEstoque = db.products.updateOne(
    { NOME: 'Galaxy Tab S8' },
    { $inc: { 'QUANTIDADE EM ESTOQUE': -2 } },
  );

  console.log('PEDIDO feito: ');
  console.log(pedidoFeito);

  console.log('Atualização de Estoque: ');
  console.log(atualizarEstoque);
} else {
  console.log(`Produto com estoque baixo, atualmente restam apenas: ${estoque}`);
}
