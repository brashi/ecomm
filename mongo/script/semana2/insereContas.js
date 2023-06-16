use('ecomm');
config.set('inspectDepth', 100);
const insercoes = db.accounts.insertMany(
  [
    {
      nome: 'Taeltido',
      email: 'tael@gmail.com',
      senha: '91111iko02',
      dataCriacao: new Date(),
      cpf: '95301006045',
      telefone: '(51) 9090-2999',
      endereco: {
        rua: 'Rua São Pedro',
        bairro: 'Nova República',
        numero: '911',
        cep: '65090385',
        cidade: 'São Luís',
        uf: 'MA',
        complemento: null,
      },
    },
    {
      nome: 'Joao Pedro',
      email: 'pedroJoao@gmail.com',
      senha: 'iiii111199je',
      dataCriacao: new Date(),
      cpf: '82800439009',
      telefone: '(51) 2323-2999',
      endereco: {
        rua: 'Rua Maranatha',
        bairro: 'Petrópolis',
        numero: '91334',
        cep: '57062005',
        cidade: 'Maceió',
        uf: 'AL',
        complemento: 'Complemento adicionado',
      },
    },
    {
      nome: 'Eugenio',
      email: 'eugen@gmail.com',
      senha: 'n111i1i1iw',
      dataCriacao: new Date(),
      cpf: '98241640064',
      telefone: '(51) 9440-2329',
      endereco: {
        rua: 'Rua Austriclínio Ferraz',
        bairro: 'Tejipió',
        numero: '223',
        cep: '50920340',
        cidade: 'Recife',
        uf: 'PE',
        complemento: null,
      },
    },
  ],
);

console.log(insercoes);
