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
    await axios.post(`${categoriesUrl}?product_id=${productId}`, {
        main_categories: mainCategories
    });

    return await getCategories(productId);
};

export const updateProductInfo = async (productId, updatedInfo) => {
    await axios.put(`${productUrl}?product_id=${productId}`, {
        updated_product: updatedInfo
    });

    return await getProductInfo(productId);
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
    if (newProduct.subCategories.length > 0) {
        const subCategoriesIds = newProduct.subCategories.map(category => category.sub_category_id);
        await addSubCategories(newProductId, subCategoriesIds);
    }
    if (newProduct.mainCategories.length > 0) {
        const mainCategoriesIds = newProduct.mainCategories.map(category => category.main_category_id);
        await addMainCategories(newProductId, mainCategoriesIds);
    }
};