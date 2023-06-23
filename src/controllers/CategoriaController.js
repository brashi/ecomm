import CategoriaService from '../services/CategoriaService.js';

class CategoriaController {
  static listarCategorias = async (req, res) => {
    try {
      await CategoriaService.buscarTodos(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static listarCategoriaPorId = async (req, res) => {
    try {
      await CategoriaService.buscarPorId(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };

  static cadastrarCategoria = async (req, res) => {
    try {
      await CategoriaService.inserirCategoria(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };

  static atualizarCategoria = async (req, res) => {
    try {
      await CategoriaService.atualizarCategoria(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };

  static ativarCategoria = async (req, res) => {
    try {
      await CategoriaService.ativarCategoria(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };

  static excluirCategoria = async (req, res) => {
    try {
      await CategoriaService.excluirCategoria(req, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };
}

export default CategoriaController;
