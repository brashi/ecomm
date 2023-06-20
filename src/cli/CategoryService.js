import fs from 'fs';

class CategoryService {
  static async findCategories() {
    const response = await fetch('http://127.0.0.1:3000/categories');
    console.log(`response status: ${response.status}`);
    const categories = await response.json();
    console.log(categories);
  }

  static async findCategoryById(id) {
    const response = await fetch(`http://127.0.0.1:3000/categories/${id}`);
    console.log(`response status: ${response.status}`);
    if (response.status === 200) {
      const categorie = await response.json();
      console.log(categorie);
    } else if (response.status === 404) {
      console.log('Categoria não encontrada.');
    }
  }

  static async createCategory(dados) {
    try {
      const encoding = 'utf-8';
      const leitura = await fs.promises.readFile(dados, encoding);
      const response = await fetch('http://127.0.0.1:3000/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: leitura,
      });
      console.log(`response status: ${response.status}`);
      const categoryInserted = await response.json();
      console.log(categoryInserted);
    } catch (err) {
      console.log('Problema !');
      throw err;
    }
  }

  static async updateCategory(id, dados) {
    try {
      const encoding = 'utf-8';
      const leitura = await fs.promises.readFile(dados, encoding);
      const response = await fetch(`http://127.0.0.1:3000/categories/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: leitura,
      });
      console.log(`response status: ${response.status}`);
      const categoryInserted = await response.json();
      console.log(categoryInserted);
    } catch (err) {
      console.log('Problema !');
      throw err;
    }
  }

  static async deleteCategory(id) {
    const response = await fetch(`http://127.0.0.1:3000/categories/${id}`, {
      method: 'DELETE',
    });
    console.log(`response status: ${response.status}`);
    if (response.status === 201) {
      console.log('Categoria deletada.');
      const categorie = await response.json();
      console.log(categorie);
    } else if (response.status === 404) {
      console.log('Categoria não encontrada.');
    }
  }
}

export default CategoryService;
