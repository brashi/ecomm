import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Types.ObjectId },
    nome: { type: String, required: true },
    status: { type: String, required: true },
  },
);

const Categoria = mongoose.model('categories', categoriaSchema);

export default Categoria;
