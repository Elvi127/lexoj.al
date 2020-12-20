import {ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY} from '../actions/cart';

const initialState = {
    cartItems: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const addedBook = action.book;
            const cartBooks = state.cartItems.filter((book) => book.id === addedBook.id);
            if(cartBooks.length > 0){
                cartBooks[0].quantity += 1; 
                const updatedBook = cartBooks[0];
                let newCartItems = state.cartItems.filter((book) => book.id !== addedBook.id);
                newCartItems.push(updatedBook);
                return{
                    ...state,
                    cartItems: newCartItems
                }
            } else{
                const newBook = {
                    ...addedBook,
                    quantity: 1
                }
                return{
                    ...state,
                    cartItems: [...state.cartItems, newBook]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((book) => book.id !== action.bookId)
            }
        case CHANGE_QUANTITY:
            let myCart = state.cartItems;
            for(let i=0; i< myCart.length; i++){
                if(myCart[i].id === action.bookId)
                    myCart[i].quantity = action.quantity;
            }
            return {
                ...state,
                cartItems: myCart
            }
        default: return state
    }
}