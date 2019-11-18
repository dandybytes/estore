export const toggleCartVisible = () => ({type: "toggle_cart"});
export const closeCart = () => ({type: "close_cart"});
export const openCart = () => ({type: "open_cart"});

export const addCartItem = item => ({type: "add_cart_item", payload: item});
export const removeCartItem = item => ({type: "remove_cart_item", payload: item});
export const removeCartProduct = item => ({type: "remove_cart_product", payload: item});
export const purgeCart = () => ({type: "purge_cart"});
