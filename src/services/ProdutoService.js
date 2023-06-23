import mongoose from 'mongoose';
import Produto from '../models/Produto.js';

class ProdutoService {
  static async buscarTodos(req, res) {
    await Produto.find().then((entidades) => {
      if (entidades.length) {
        res.status(200).json(entidades);
      } else {
        res.status(404).json('Nenhum Produto cadastrado');
      }
    });
  }

  static async buscarPorId(req, res) {
    const { id } = req.params;
    if (mongoose.Types.ObjectId.isValid(id)) {
      const busca = await Produto.findById(id);
      if (busca !== null) {
        res.status(200).json(busca);
      } else {
        res.status(404).json('Objeto não encontrado');
      }
    } else {
      res.status(403).json('ID da entidade inválido');
    }
  }

  static async inserirProduto(req, res) {
    const produto = new Produto(req.body);
    await produto.save().then((entidade) => {
      res.status(201).send(entidade.toJSON());
    });
  }

  static async atualizarProduto(req, res) {
    const { id } = req.params;
    await Produto.findByIdAndUpdate(id, { $set: req.body }, { new: true }).then((entidade) => {
      if (!entidade) {
        res.status(404).send({ message: 'Produto não encontrado.' });
      } else {
        res.status(200).send({ message: 'Produto atualizado com sucesso.', entity: entidade.toJSON() });
      }
    });
  }

  static async excluirProduto(req, res) {
    const { id } = req.params;

    await Produto.findByIdAndDelete(id).then((entidade) => {
      if (!entidade) {
        res.status(404).send({ message: 'Produto não encontrado.' });
      } else {
        res.status(200).send({ message: 'Produto deletado com sucesso.' });
      }
    });
  }
}

export default ProdutoService;
