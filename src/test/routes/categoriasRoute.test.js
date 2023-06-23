import request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import { connectDB, disconnectDB } from '../dbTest.js';
import Categoria from '../../models/Categoria.js';
import app from '../../main.js';

let server;
beforeEach(async () => {
  const port = 3000;
  server = app.listen(port);
  await connectDB();
});

afterEach(async () => {
  server.close();
  await disconnectDB();
});

describe('GET /api/categories', () => {
  it('Deve retornar a lista de categorias cadastradas', async () => {
    jest.spyOn(Categoria, 'find').mockResolvedValue([{
      nome: 'Teste Jest',
      status: 'INATIVA',
    }]);

    await request(app)
      .get('/api/categories')
      .expect('content-type', /json/)
      .expect(200);
  });

  it('Deve forçar um 404 por categorias cadastradas', async () => {
    jest.spyOn(Categoria, 'find').mockResolvedValue([]);
    await request(app)
      .get('/api/categories')
      .expect('content-type', /json/)
      .expect(404);
  });
});

let novaCategoria;
describe('POST /api/admin/categories', () => {
  it('Deve inserir uma nova categoria', async () => {
    const resposta = await request(app)
      .post('/api/admin/categories')
      .send({
        nome: 'Teste Jest',
        status: 'INATIVA',
      })
      .expect(201);

    novaCategoria = resposta.body;
  });
});

describe('GET /api/categories/id', () => {
  it('Deve buscar uma categoria por ID com seus detalhes', async () => {
    const resposta = await request(app)
      .get(`/api/categories/${novaCategoria._id}`)
      .expect(200);

    expect(resposta.body.nome).toBe(novaCategoria.nome);
    expect(resposta.body.status).toBe(novaCategoria.status);
  });
});

describe('PUT /api/admin/categories/id', () => {
  it('Deve atualizar o nome da categoria', async () => {
    const nomeAtualizado = 'Teste Jest ALTERADO';
    const resposta = await request(app)
      .put(`/api/admin/categories/${novaCategoria._id}`)
      .send({ nome: nomeAtualizado })
      .expect(200);

    expect(resposta.body.entity.nome).toBe(nomeAtualizado);
  });

  it('Deve ativar o status da categoria', async () => {
    const resposta = await request(app)
      .put(`/api/admin/categories/${novaCategoria._id}/update`)
      .expect(200);

    expect(resposta.body.entity.status).toBe('ATIVA');
  });
});

describe('DELETE /api/admin/categories/id', () => {
  it('Deve deletar uma categoria pelo ID', async () => {
    await request(app)
      .delete(`/api/admin/categories/${novaCategoria._id}`)
      .expect(200);
  });
});
