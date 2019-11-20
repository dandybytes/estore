export const getProductInfo = (productList, idSoughtProduct) =>
    productList.find(product => product.id === idSoughtProduct);

export const searchProductList = (list, query) => {
    const cleanString = str => str.trim().toLowerCase();
    if (!list || list.length === 0) return [];
    return list.filter(product => {
        // if query string consists of multiple words, split it into words
        const queryWords = query.split(" ");
        // result positive only if every word in query string included in either
        return queryWords.every(
            queryWord =>
                cleanString(product.model).includes(cleanString(queryWord)) ||
                cleanString(product.manufacturer).includes(cleanString(queryWord))
        );
    });
};
