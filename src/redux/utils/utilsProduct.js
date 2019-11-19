export const getProductInfo = (productList, idSoughtProduct) =>
    productList.find(product => product.id === idSoughtProduct);
