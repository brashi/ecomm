import express from 'express';
import categorias from './categoriasRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(404).send({ message: 'Nada implementado.' });
  });

  app.use(
    express.json(),
    categorias,
  );
};

export default routes;
