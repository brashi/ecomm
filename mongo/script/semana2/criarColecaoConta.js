use("ecomm");
db.createCollection("accounts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "nome", "email", "senha", "dataCriacao", "cpf", "telefone", "endereco"],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "objectId"
                },
                nome: {
                    bsonType: "string",
                    description: "nome de usuario da conta",
                    minLength: 5
                },
                email: {
                    bsonType: "string",
                    description: "email atrelado a conta",
                    minLength: 5
                },
                senha: {
                    bsonType: "string",
                    description: "senha de acesso da conta",
                    minLength: 5
                },
                dataCriacao: {
                    bsonType: "date",
                    description: "Data de criação da conta"
                },
                cpf: {
                    bsonType: "string",
                    description: "CPF com exatos 11 caracteres",
                    minLength: 11,
                    maxLength: 11
                },
                telefone: {
                    bsonType: "string",
                    description: "Telefone deve ter pelo menos 10 digitos",
                    minLength: 10
                },
                endereco: {
                    bsonType: "object",
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
                }
            }
        }
    }
});