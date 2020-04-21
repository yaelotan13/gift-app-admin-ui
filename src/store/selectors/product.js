export const productSlector = (state) => state.product;

export const productCategoriesSelector = (state) => { 
    return {
        loading: state.product.loading,
        hasError: state.product.hasError,
        mainCategories: state.product.mainCategories,
        subCategories: state.product.subCategories,
        updateSuccess: state.product.updateSuccess,
        deleteSuccess: state.product.deleteSuccess
    }
};
