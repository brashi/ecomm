import fs from 'fs';

class CategoryService {

    static async findCategories() {
        let response = await fetch("http://127.0.0.1:3000/categories");
        console.log('response status: ' + response.status);
        let categories = await response.json();
        console.log(categories);
    }

    static async findCategoryById(id) {
        let response = await fetch(`http://127.0.0.1:3000/categories/${id}`);
        console.log('response status: ' + response.status);
        if (response.status == '200') {
            let categorie = await response.json();
            console.log(categorie);
        } else if (response.status == '404') {
            console.log('Categoria não encontrada.');
        }
    }

    static async createCategory(dados) {
        try {
            const encoding = 'utf-8';
            const leitura = await fs.promises.readFile(dados, encoding);
            let response = await fetch('http://127.0.0.1:3000/categories', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: leitura
            });
            console.log('response status: ' + response.status);
            let categoryInserted = await response.json();
            console.log(categoryInserted);
        } catch (err) {
            throw err;
        }
    }

    static async updateCategory(id, dados) {
        try {
            const encoding = 'utf-8';
            const leitura = await fs.promises.readFile(dados, encoding);
            let response = await fetch(`http://127.0.0.1:3000/categories/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: leitura
            });
            console.log('response status: ' + response.status);
            let categoryInserted = await response.json();
            console.log(categoryInserted);
        } catch (err) {
            throw err;
        }
    }

    static async deleteCategory (id) {
        let response = await fetch(`http://127.0.0.1:3000/categories/${id}`, {
            method: "DELETE"
        });
        console.log('response status: ' + response.status);
        if (response.status == '200') {
            console.log('Categoria deletada.');
            let categorie = await response.json();
            console.log(categorie);
        } else if (response.status == '404') {
            console.log('Categoria não encontrada.');
        }
    }
}

export default CategoryService;