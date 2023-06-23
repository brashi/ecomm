import request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import { connectDB, disconnectDB } from '../dbTest.js';
import Categoria from '../../models/Categoria.js';
import Produto from '../../models/Produto.js';
import app from '../../main.js';

let server;
beforeEach(async () => {
  const port = 3001;
  server = app.listen(port);
  await connectDB();
});

afterEach(async () => {
  server.close();
  await disconnectDB();
});

let categoriaMock;
let novoProduto;
describe('POST /api/admin/categories', () => {
  it('Deve inserir uma nova categoria', async () => {
    const categoria = new Categoria({
      nome: 'Categoria Mockada',
      status: 'ATIVA',
    });
    await categoria.save().then((entidade) => {
      categoriaMock = entidade.toJSON();
    });

    const resposta = await request(app)
      .post('/api/admin/products')
      .send({
        nome: 'Produto Jest',
        descricao: 'Feito via jest',
        slug: 'oooo-2222-1111',
        precoUnitario: '128',
        estoque: 250,
        categoria: categoriaMock._id,
      })
      .expect(201);

    novoProduto = resposta.body;
  });
});

describe('GET /api/products', () => {
  it('Deve retornar a lista de produtos cadastrados', async () => {
    await request(app)
      .get('/api/products')
      .expect('content-type', /json/)
      .expect(200);
  });

  it('Deve forçar um 404 por produtos cadastrados', async () => {
    jest.spyOn(Categoria, 'find').mockResolvedValue([]);
    jest.spyOn(Produto, 'find').mockResolvedValue([]);
    await request(app)
      .get('/api/products')
      .expect('content-type', /json/)
      .expect(404);
  });
});

describe('GET /api/products/id', () => {
  it('Deve buscar um produto por ID com seus detalhes', async () => {
    const resposta = await request(app)
      .get(`/api/products/${novoProduto._id}`)
      .expect(200);

    expect(resposta.body.nome).toBe(novoProduto.nome);
    expect(resposta.body.status).toBe(novoProduto.status);
  });
});

describe('PUT /api/admin/products/id', () => {
  it('Deve atualizar o nome de um produto', async () => {
    const nomeAtualizado = 'PRODUTO Jest ALTERADO';
    const resposta = await request(app)
      .put(`/api/admin/products/${novoProduto._id}`)
      .send({ nome: nomeAtualizado })
      .expect(200);

    expect(resposta.body.entity.nome).toBe(nomeAtualizado);
  });
});

describe('DELETE /api/admin/products/id', () => {
  it('Deve deletar um produto pelo ID', async () => {
    await request(app)
      .delete(`/api/admin/products/${novoProduto._id}`)
      .expect(200);
  });
});
