import categoriaService from '../services/CategoriaService.js';

class CategoriaController {
  static listarCategorias = async (req, res) => {
    try {
      await categoriaService.buscarTodos(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static listarCategoriaPorId = async (req, res) => {
    try {
      await categoriaService.buscarPorId(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };

  static cadastrarCategoria = async (req, res) => {
    try {
      await categoriaService.inserirCategoria(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };

  static atualizarCategoria = async (req, res) => {
    try {
      await categoriaService.atualizarCategoria(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };

  static ativarCategoria = async (req, res) => {
    try {
      await categoriaService.ativarCategoria(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };

  static excluirCategoria = async (req, res) => {
    try {
      await categoriaService.excluirCategoria(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };
}

export default CategoriaController;
