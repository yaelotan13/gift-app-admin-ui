import { productUrl, categoriesUrl } from '../config/serverUrl';
import axios from 'axios';

export const getProductInfo = async (productId) => {
    const productInfo = await axios.get(`${productUrl}?product_id=${productId}`);
    const categoriesInfo = await axios.get(`${categoriesUrl}?product_id=${productId}`);

    return {
        ...productInfo.data[0],
        ...categoriesInfo.data
    };
};

const getCategories = async (productId) => {
    const result = await axios.get(`${categoriesUrl}?product_id=${productId}`);
    return result.data;
};

export const deleteMainCategoriesFromProduct = async (productId, mainCategories) => {
    await axios.delete(`${categoriesUrl}?product_id=${productId}`, {
        data: {
            main_categories: mainCategories
        }
    });

    return await getCategories(productId);
};

export const deleteSubCategoriesFromProduct = async (productId, subCategories) => {
    await axios.delete(`${categoriesUrl}?product_id=${productId}`, {
        data: {
            sub_categories: subCategories
        }
    });

    return await getCategories(productId);
};

export const addSubCategories = async (productId, subCategories) => {
    await axios.post(`${categoriesUrl}?product_id=${productId}`, {
        sub_categories: subCategories
    });

    return await getCategories(productId);
};

export const addMainCategories = async (productId, mainCategories) => {
    // let mainCategoriesIds = Array.from(mainCategories, category => category.main_category_id);
    await axios.post(`${categoriesUrl}?product_id=${productId}`, {
        main_categories: mainCategories
    });

    return await getCategories(productId);
};

export const updateProductInfo = async (productId, updatedProduct) => {
    await axios.put(`${productUrl}?product_id=${productId}`, {
        updated_product: updatedProduct
    });

    await getProductInfo(productId);
    if (updatedProduct.addedMainCategories.length > 0) {
        await addMainCategories(productId, updatedProduct.addedMainCategories);
    }
    if (updatedProduct.removedMainCategories.length > 0) {
        await deleteMainCategoriesFromProduct(productId, updatedProduct.removedMainCategories);
    }
    if (updatedProduct.addedSubCategories.length > 0) {
        await addSubCategories(productId, updatedProduct.addedSubCategories);
    }
    if (updatedProduct.removedSubCategories.length > 0) {
        await deleteSubCategoriesFromProduct(productId, updatedProduct.removedSubCategories);
    }
};

const getFormData = (product) => {
    const bodyFormData = new FormData();
    bodyFormData.set('name', product.name);
    bodyFormData.set('store', product.store);
    bodyFormData.set('price', product.price);
    bodyFormData.set('link', product.link);
    bodyFormData.set('image', product.image);

    return bodyFormData;
};

export const addNewProduct = async (newProduct) => {
    const product = getFormData(newProduct);
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
    };

    const response = await axios.post(productUrl, product, config);

    const newProductId = response.data.productId;
    if (newProduct.addedMainCategories.length > 0) {
        console.log(newProduct.addedMainCategories);
        await addMainCategories(newProductId, newProduct.addedMainCategories);
    }
    if (newProduct.addedSubCategories.length > 0) {
        console.log(newProduct.addedSubCategories);
        await addSubCategories(newProductId, newProduct.addedSubCategories);
    }
};