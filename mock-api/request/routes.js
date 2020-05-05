const userResponses = require('../response/user');
const productsResponses = require('../response/products');
const categoriesResponses = require('../response/categories');

function register(app) {
    app.post('/admin/users', userResponses.logIn);
    app.get('/admin/products', productsResponses.getProducts);
    app.get('/admin/categories', categoriesResponses.getCategoriesByProduct);
    app.get('/admin/categories/main', categoriesResponses.getMainCategories);
    app.get('/admin/categories/sub', categoriesResponses.getSubCategories);
    app.post('/admin/categories/main', categoriesResponses.newMainCategory);
    app.post('/admin/categories/sub', categoriesResponses.newSubCategory);
}

module.exports = {
    register: register
}