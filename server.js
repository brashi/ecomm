import app from './src/main.js';
import db from './src/config/dbConnect.js';

db.on('error', console.log.bind(console, 'Erro ao se conectar no MongoDB'));
db.once('open', () => {
  console.log('conexão com o banco feita com sucesso');
});

app.listen(3000, () => {
    console.log('Servidor aberto na porta 3000');
});
