import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex( (item) => {return item.id === action.payload.id })
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
            }else{
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
                state.cartTotalQuantity = state.cartItems.length;
            }
            state.cartItems.forEach(element => {
                console.log('product name', element.productName,'qnt: ',element.cartQuantity)
            });
            console.log('n of prd', state.cartTotalQuantity)
        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;