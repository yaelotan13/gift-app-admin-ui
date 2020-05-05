const productsMock = require('../data/products');

const getProducts = (req, res, next) => {
    console.log('[GET] /admin/products');
    if (req.query.product_id) {
        next();
    } else {
        res.status(200).send(productsMock.products)
    }
};

const getProductInfo = (req, res) => {
    console.log(`[GET] /admin/products?product_id=${req.query_product_id}`);
    const result = {
        product_id: 12,
        product_name: 'New Entertainment Desktop Basketball',
        product_image: 'https://gift-app-images.s3.us-west-2.amazonaws.com/1588171111082-desk-basketball.jpg',
        store: 'Amazon',
        price: 28.36,
        link: 'https://www.amazon.com/dp/B004WSZGOQ/ref=cm_gf_aAM_i7_d_p0_qd3_F9blo5fe1Srgt5H5QmoV'
    };
    res.status(200).send(result);
};

module.exports = {
    getProducts,
    getProductInfo
}