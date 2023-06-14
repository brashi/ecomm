use("ecomm");

let usuario = db.accounts.findOne({});
let estatistica = db.orders.aggregate( [
    {
        $match: {"account.accountId": usuario._id }
    },
    {
        $unwind: {path: "$itens" }
    },
    {
        $addFields: {
          quantidadePedido: '$itens.quantidade',
          montantePrecoPedido: {$multiply: ['$itens.quantidade', '$itens.precoUnitario']},
          montanteDescontoPedido: {$multiply: ['$montanteTotalPedido', '$itens.desconto']}
        }
    },
    {
        $group: {
            _id: usuario._id,
            quantidadeTotal: {$sum: '$quantidadePedido'},
            montanteTotal: {$sum: '$montantePrecoPedido'},
            montanteTotalDesconto: {$sum: '$montanteDescontoPedido'}
        }
    }
])

console.log(estatistica);