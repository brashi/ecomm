import express from 'express';
import CategoriaController from '../controllers/CategoriaController.js';

const router = express.Router();

router
  .get('/api/categories', CategoriaController.listarCategorias)
  .get('/api/categories/:id', CategoriaController.listarCategoriaPorId)
  .post('/api/categories', CategoriaController.cadastrarCategoria)
  .put('/api/categories/:id', CategoriaController.atualizarCategoria)
  .delete('/api/categories/:id', CategoriaController.excluirCategoria);

export default router;
