export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

export const addToCart = book => {
    return {type: ADD_TO_CART, book: book}
}

export const removeFromCart = bookId => {
    return {type: REMOVE_FROM_CART, bookId: bookId}
}

export const changeQuantity = (bookId, quantity) => {
    return {type: CHANGE_QUANTITY, bookId: bookId, quantity: quantity}
}