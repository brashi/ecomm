import CategoryService from './CategoryService.js';

const argumentos = process.argv;

function processarComando(args) {
  args.forEach((arg, i) => {
    switch (arg) {
      case '--listarCategorias':
        CategoryService.findCategories();
        break;
      case '--recuperarCategoriaPorId':
        CategoryService.findCategoryById(args[i + 1]);
        break;
      case '--inserirCategoria':
        CategoryService.createCategory(args[i + 1]);
        break;
      case '--atualizarCategoria':
        CategoryService.updateCategory(args[i + 1], args[i + 2]);
        break;
      case '--excluirCategoria':
        CategoryService.deleteCategory(args[i + 1]);
        break;
      default:
        break;
    }
  });
}

processarComando(argumentos);
