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
                // localStorage.setItem("cartProductNumber", JSON.stringify(state.cartTotalQuantity));
            }
            state.cartTotalAmount = 0;
            state.cartItems.forEach(element => {
                state.cartTotalAmount += element.price * element.cartQuantity
                // console.log(state.cartTotalAmount)
            });
            // console.log('n of prd', state.cartTotalQuantity)
            // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        // increaseProductQuantity: (state, action) => {

        // },
        decreaseProductQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => { return item.id === action.payload.id })
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            }
            state.cartTotalAmount = 0;
            state.cartItems.forEach(element => {
                state.cartTotalAmount += element.price * element.cartQuantity
                // console.log(state.cartTotalAmount)
            });

            // if (itemIndex >= 0) {
            //     state.cartItems[itemIndex] = { ...state.cartItems[itemIndex], cartQuantity: state.cartItems[itemIndex].cartQuantity - 1 }
            // }
        },
        increaseProductQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => { return item.id === action.payload.id })
            if (state.cartItems[itemIndex].cartQuantity >= 1) {
                state.cartItems[itemIndex].cartQuantity += 1;
            }
            state.cartTotalAmount = 0;
            state.cartItems.forEach(element => {
                state.cartTotalAmount += element.price * element.cartQuantity
                // console.log(state.cartTotalAmount)
            });
        },
        removeProductFromCart: (state, action) => {
            /* another way to remove product from the shopping cart
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                )

                state.cartItems = nextCartItems
            */

            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            state.cartItems.splice(itemIndex, 1);
            state.cartTotalQuantity -= 1;
        },
    }
})

export const { addToCart, decreaseProductQuantity, increaseProductQuantity, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;