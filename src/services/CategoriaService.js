import mongoose from 'mongoose';
import Categoria from '../models/Categoria.js';

class CategoriaService {
  static async buscarTodos(req, res) {
    await Categoria.find().then((entidades) => {
      if (entidades.length) {
        res.status(200).json(entidades);
      } else {
        res.status(404).json('Nenhuma categoria cadastrada');
      }
    });
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
    await categoria.save().then((entidade) => {
      res.status(201).send(entidade.toJSON());
    });
  }

  static async atualizarCategoria(req, res) {
    const { id } = req.params;
    await Categoria.findByIdAndUpdate(id, { $set: req.body }, { new: true }).then((entidade) => {
      if (!entidade) {
        res.status(404).send({ message: 'Categoria não encontrada.' });
      } else {
        res.status(200).send({ message: 'Categoria atualizada com sucesso.', entity: entidade.toJSON() });
      }
    });
  }

  static async ativarCategoria(req, res) {
    const { id } = req.params;
    await Categoria.findByIdAndUpdate(id, { $set: { status: 'ATIVA' } }, { new: true }).then((entidade) => {
      if (!entidade) {
        res.status(404).send({ message: 'Categoria não encontrada.' });
      } else {
        res.status(200).send({ message: 'Categoria atualizada com sucesso.', entity: entidade.toJSON() });
      }
    });
  }

  static async excluirCategoria(req, res) {
    const { id } = req.params;

    await Categoria.findByIdAndDelete(id).then((entidade) => {
      if (!entidade) {
        res.status(404).send({ message: 'Categoria não encontrada.' });
      } else {
        res.status(200).send({ message: 'Categoria deletada com sucesso.' });
      }
    });
  }
}

export default CategoriaService;
