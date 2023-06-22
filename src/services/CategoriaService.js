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
    await categoria.save().then((entidade) => {
      res.status(201).send(entidade.toJSON());
    });
  }

  static async atualizarCategoria(req, res) {
    const { id } = req.params;
    await Categoria.findByIdAndUpdate(id, { $set: req.body }).then((entidade) => {
      if (!entidade) {
        res.status(404).send({ message: 'Categoria não encontrada.' });
      } else {
        res.status(200).send({ message: 'Categoria atualizada com sucesso.' });
      }
    });
  }

  static async ativarCategoria(req, res) {
    const { id } = req.params;
    res.status(200).json(`${id} teve seu status alterado`);
    // await Categoria.findByIdAndUpdate(id, { $set: {status}}, (err) => {
    //     if (!err) {
    //       res.status(200).send({ message: 'Categoria atualizada com sucesso.' });
    //     } else {
    //       res.status(500).send({ message: err.message });
    //     }
    //   });
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
