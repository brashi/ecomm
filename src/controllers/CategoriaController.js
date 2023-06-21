import categoriaService from '../services/CategoriaService.js';

class CategoriaController {
  static listarCategorias = async (req, res) => {
    try {
      const categoriasResultado = await categoriaService.buscarTodos();
      res.status(200).json(categoriasResultado);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static listarCategoriaPorId = async (req, res) => {
    try {
      const { id } = req.params;
      await categoriaService.buscarPorId(id, res);
    } catch (err) {
      res.status(500).json(`error: ${err}`);
    }
  };
}

export default CategoriaController;
