export const getCartValue = cartItems =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

export const getCartItemCount = cartItems =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

export const addUnitToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    } else {
        return [...cartItems, {...cartItemToAdd, quantity: 1}];
    }
};

export const removeUnitFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );
};

export const removeProductFromCart = (cartItems, productToRemove) =>
    cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
