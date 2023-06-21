import mongoose from 'mongoose';
import Categoria from '../models/Categoria.js';

class CategoriaService {
  static async buscarTodos() {
    const busca = await Categoria.find();
    return busca;
  }

  static async buscarPorId(req, res) {
    const { id } = req.params;
    if (mongoose.Types.ObjectId.isValid(id)) {
      const busca = await Categoria.findById(id);
      if (busca !== null) {
        res.status(200).json(busca);
      } else {
        res.status(404).json('Objeto não encontrado');
      }
    } else {
      res.status(403).json('ID da entidade inválido');
    }
  }

  static async inserirCategoria(req, res) {
    const categoria = new Categoria(req.body);
    await categoria.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - falha no cadastro.` });
      } else {
        res.status(201).send(categoria.toJSON());
      }
    });
  }

  static async atualizarCategoria(req, res) {
    const { id } = req.params;
    await Categoria.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Categoria atualizada com sucesso.' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  }

  static async excluirCategoria(req, res) {
    const { id } = req.params;

    await Categoria.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Categoria deletada com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  }
}

export default CategoriaService;
