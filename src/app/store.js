import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";
import userSlice from "../features/user/userSlice";
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import cartSlice from "../features/cart/cartSlice";


export default configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
        cart: cartSlice
    }
})