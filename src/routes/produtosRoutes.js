import express from 'express';
import ProdutoController from '../controllers/ProdutoController.js';

const router = express.Router();

router
  .get('/api/products', ProdutoController.listarProdutos)
  .get('/api/products/:id', ProdutoController.listarProdutoPorId)
  .post('/api/admin/products', ProdutoController.cadastrarProduto)
  .put('/api/admin/products/:id', ProdutoController.atualizarProduto)
  .delete('/api/admin/products/:id', ProdutoController.excluirProduto);

export default router;
