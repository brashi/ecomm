import categorias from '../models/Categoria.js';

class CategoriaController {
  static listarCategorias = async (req, res) => {
    try {
      const categoriasResultado = await categorias.find();
      res.status(200).json(categoriasResultado);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default CategoriaController;
