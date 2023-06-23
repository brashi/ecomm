import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema(
  {
    nome: {
      type: String, minLength: 3, required: true, match: /^[^0-9].*/,
    },
    descricao: { type: String, minLength: 5, required: true },
    slug: {
      type: String, minLength: 5, required: true, match: /^[a-zA-Z0-9-]*$/,
    },
    precoUnitario: { type: mongoose.SchemaTypes.Decimal128, min: 0, required: true },
    estoque: {
      type: Number, integer: true, min: 0, max: 10000, required: true,
    },
    categoria: { type: mongoose.SchemaTypes.ObjectId, ref: 'categories', required: true },
  },
);

const Produto = mongoose.model('products', produtoSchema);

export default Produto;
