import ProdutoService from '../services/ProdutoService.js';

class ProdutoController {
  static listarProdutos = async (req, res) => {
    try {
      await ProdutoService.buscarTodos(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static listarProdutoPorId = async (req, res) => {
    try {
      await ProdutoService.buscarPorId(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };

  static cadastrarProduto = async (req, res) => {
    try {
      await ProdutoService.inserirProduto(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };

  static atualizarProduto = async (req, res) => {
    try {
      await ProdutoService.atualizarProduto(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };

  static ativarProduto = async (req, res) => {
    try {
      await ProdutoService.ativarProduto(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };

  static excluirProduto = async (req, res) => {
    try {
      await ProdutoService.excluirProduto(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };
}

export default ProdutoController;
