export const productsSlector = (state) => state.products;

export const filteredProductsSelector = (state) => {
    if (state.products.searchText) {
        return (
            state.products.products.filter((product) => {
                return product.product_name.toLowerCase().indexOf(state.products.searchText.toLowerCase()) >= 0;
            })
        )
    }

    return state.products.products;
}
