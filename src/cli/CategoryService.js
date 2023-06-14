class CategoryService {
    static async findCategories () {
        let response = await fetch("http://127.0.0.1:3000/categories");
        console.log('response status: ' + response.status);
        let categories = await response.json();
        console.log(categories);
    }

    static async findCategoryById (id) {
        let response = await fetch(`http://127.0.0.1:3000/categories/${id}`);
        console.log('response status: ' + response.status);
        if(response.status == '200') {
            let categorie = await response.json();
            console.log(categorie);
        } else if(response.status == '404') {
            console.log('Categoria não encontrada.');
        }
    }
}

export default CategoryService;