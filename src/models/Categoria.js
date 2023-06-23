import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema(
  {
    nome: { type: String, minLength: 3, required: true },
    status: { type: String, enum: ['ATIVA', 'INATIVA'], required: true },
  },
);

const Categoria = mongoose.model('categories', categoriaSchema);

export default Categoria;
