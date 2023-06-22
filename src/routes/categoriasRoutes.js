import express from 'express';
import CategoriaController from '../controllers/CategoriaController.js';

const router = express.Router();

router
  .get('/api/categories', CategoriaController.listarCategorias)
  .get('/api/categories/:id', CategoriaController.listarCategoriaPorId)
  .post('/api/admin/categories', CategoriaController.cadastrarCategoria)
  .put('/api/admin/categories/:id', CategoriaController.atualizarCategoria)
  .put('/api/admin/categories/:id/update', CategoriaController.ativarCategoria)
  .delete('/api/admin/categories/:id', CategoriaController.excluirCategoria);

export default router;
