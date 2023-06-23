import mongoose from 'mongoose';

export async function connectDB() {
  await mongoose.connect('mongodb://admin:secret@127.0.0.1:27017/ecomm?authSource=admin');
}

export async function disconnectDB() {
  await mongoose.connection.close();
}
