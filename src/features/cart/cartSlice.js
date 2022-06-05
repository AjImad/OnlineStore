import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartItems: [],
    // cartTotalQuantity: localStorage.getItem("cartProductNumber") ? JSON.parse(localStorage.getItem("cartProductNumber")) : 0,
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => { return item.id === action.payload.id })
            if (itemIndex >= 0) {
                state.cartItems[itemIndex] = { ...state.cartItems[itemIndex], cartQuantity: state.cartItems[itemIndex].cartQuantity + 1 }
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                state.cartTotalQuantity = state.cartItems.length;
            }
            state.cartTotalAmount = 0;
            state.cartItems.forEach(element => {
                state.cartTotalAmount += element.price * element.cartQuantity
            });
        },
        decreaseProductQuantity: (state, action) => {
            console.log('action.payload.id', action.payload.id)

            const itemIndex = state.cartItems.findIndex((item) => { return item.id === action.payload.id })
            console.log(itemIndex)
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            }
            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                state.cartItems.splice(itemIndex, 1);
                state.cartTotalQuantity -= 1;
            }
            state.cartTotalAmount = 0;
            state.cartItems.forEach(element => {
                state.cartTotalAmount += element.price * element.cartQuantity
            });
        },
        increaseProductQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => { return item.id === action.payload.id })
            if (state.cartItems[itemIndex].cartQuantity >= 1) {
                state.cartItems[itemIndex].cartQuantity += 1;
            }
            state.cartTotalAmount = 0;
            state.cartItems.forEach(element => {
                state.cartTotalAmount += element.price * element.cartQuantity
            });
        },
        removeProductFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            state.cartItems.splice(itemIndex, 1);
            state.cartTotalQuantity -= 1;

            state.cartTotalAmount = 0;
            state.cartItems.forEach(element => {
                state.cartTotalAmount += element.price * element.cartQuantity
            });
        },
    }
})

export const { addToCart, decreaseProductQuantity, increaseProductQuantity, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;