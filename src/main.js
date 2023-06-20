import express from 'express';
import routes from './routes/index.js';
import db from './config/dbConnect.js';

db.on('error', console.log.bind(console, 'Erro ao se conectar no MongoDB'));
db.once('open', () => {
  console.log('conexão com o banco feita com sucesso');
});

const app = express();
app.use(express.json());
routes(app);

app.listen(3000, () => {
  console.log('Servidor aberto na porta 3000');
});

export default app;
