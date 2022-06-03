import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: localStorage.getItem("cartProductNumber") ? JSON.parse(localStorage.getItem("cartProductNumber")) : 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex( (item) => {return item.id === action.payload.id })
            if(itemIndex >= 0){
                state.cartItems[itemIndex] = {...state.cartItems[itemIndex], cartQuantity: state.cartItems[itemIndex].cartQuantity + 1}
            }else{
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
                state.cartTotalQuantity = state.cartItems.length;
                localStorage.setItem("cartProductNumber", JSON.stringify(state.cartTotalQuantity));
            }
            state.cartItems.forEach(element => {
                state.cartTotalAmount += element.price * element.cartQuantity
                // console.log(state.cartTotalAmount)
            });
            // console.log('n of prd', state.cartTotalQuantity)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;