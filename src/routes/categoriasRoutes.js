import express from 'express';
import CategoriaController from '../controllers/CategoriaController.js';

const router = express.Router();

router.get('/api/categories', CategoriaController.listarCategorias);

export default router;
