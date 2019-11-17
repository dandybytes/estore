export const toggleCartVisible = () => ({type: "toggle_cart"});
export const closeCart = () => ({type: "close_cart"});
export const openCart = () => ({type: "open_cart"});
export const addItemToCart = item => ({type: "add_item_to_cart", payload: item});
