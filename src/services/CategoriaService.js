import mongoose from 'mongoose';
import categorias from '../models/Categoria.js';

class CategoriaService {
  static async buscarTodos() {
    const busca = await categorias.find();
    return busca;
  }

  static async buscarPorId(id, res) {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const busca = await categorias.findById(id);
      if (busca !== null) {
        res.status(200).json(busca);
      } else {
        res.status(404).json('Objeto não encontrado');
      }
    } else {
      res.status(403).json('ID da entidade inválido');
    }
  }
}

export default CategoriaService;
