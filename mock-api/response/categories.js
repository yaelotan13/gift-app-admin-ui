const categoriesMock = require('../data/categories');

const getCategoriesByProduct = (req, res) => {
    console.log(`[GET] /admin/categories?product_id=${req.query.product_id}`);
    const result = {
        mainCategories: categoriesMock.mainCategories,
        subCategories: categoriesMock.subCategories
    }
    res.status(200).send(result);
};

const getMainCategories = (req, res) => {
    console.log('[GET] /admin/categories/main');
    res.status(200).send(categoriesMock.mainCategories)
};

const getSubCategories = (req, res) => {
    console.log('[GET] /admin/categories/sub');
    res.status(200).send(categoriesMock.subCategories)
};

const newMainCategory = (req, res) => {
    console.log('[POST] /admin/categories/main');
    res.send(200);
};

const newSubCategory = (req, res) => {
    console.log('[POST] /admin/categories/sub');
    res.send(200);
};

module.exports = {
    getCategoriesByProduct,
    getMainCategories,
    getSubCategories,
    newMainCategory,
    newSubCategory
}