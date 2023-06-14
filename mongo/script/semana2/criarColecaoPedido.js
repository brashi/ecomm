use("ecomm");
db.createCollection("orders", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "account", "dataPedido", "enderecoEntrega", "itens"],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "objectId"
                },
                account: {
                    bsonType: "object",
                    description: "Conta que fez o pedido",
                    required: ["accountId", "nomeCliente"],
                    additionalProperties: false,
                    properties: {
                        accountId: {
                            bsonType: "objectId",
                            description: "id de referencia a conta"
                        },
                        nomeCliente: {
                            bsonType: "string",
                            minLength: 5,
                            description: "Nome do cliente que fez o pedido"
                        }
                    }
                },
                dataPedido: {
                    bsonType: "date",
                    description: "Data do pedido"
                },
                enderecoEntrega: {
                    bsonType: "object",
                    description: "Endereço de entrega do pedido",
                    required: ["rua", "bairro", "numero", "complemento", "cep", "cidade", "uf"],
                    additionalProperties: false,
                    properties: {
                        rua: {
                            bsonType: "string",
                            minLength: 1,
                            description: "Rua do endereço (min 1 caractere)"
                        },
                        bairro: {
                            bsonType: "string",
                            minLength: 1,
                            description: "Bairro do endereço (min 1 caractere)"
                        },
                        numero: {
                            bsonType: "string",
                            minLength: 1,
                            description: "Número do endereço (min 1 caractere)"
                        },
                        complemento: {
                            bsonType: ["string", "null"],
                            description: "Complemento do endereço"
                        },
                        cep: {
                            bsonType: "string",
                            minLength: 8,
                            maxLength: 8,
                            description: "CEP do endereço"
                        },
                        cidade: {
                            bsonType: "string",
                            minLength: 5,
                            description: "Cidade do endereço"
                        },
                        uf: {
                            bsonType: "string",
                            minLength: 2,
                            maxLength: 2,
                            description: "UF do endereço"
                        }
                    }
                },
                itens: {
                    bsonType: "array",
                    description: "Lista de itens feitos no pedido",
                    minItems: 1,
                    additionalProperties: false,
                    items: {
                        bsonType: "object",
                        required: ["productId", "quantidade", "precoUnitario"],
                        additionalProperties: false,
                        properties: {
                            productId: {
                                bsonType: "objectId",
                                description: "id de referencia ao produto"
                            },
                            quantidade: {
                                bsonType: "int",
                                minimum: 1,
                                description: "Quantidade do produto pedida"
                            },
                            desconto: {
                                bsonType: ["decimal", "null"],
                                minimum: 0.00,
                                exclusiveMinimum: true,
                                description: "Desconto aplicado ao produto"
                            },
                            precoUnitario: {
                                bsonType: "decimal",
                                minimum: 0.00,
                                exclusiveMinimum: true,
                                description: "Preço unitário do produto"
                            }
                        }
                    }
                }
            }
        }
    }
});