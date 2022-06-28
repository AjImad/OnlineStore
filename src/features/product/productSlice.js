import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductData: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { setProductData } = productSlice.actions;

export default productSlice.reducer;