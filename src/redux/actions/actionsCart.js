export const toggleCartVisible = () => ({type: "toggle_cart"});
export const closeCart = () => ({type: "close_cart"});
export const openCart = () => ({type: "open_cart"});
export const addCartItem = item => ({type: "add_cart_item", payload: item});
