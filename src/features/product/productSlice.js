import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductData: (state, action) => {
            state.value.push(action.payload.product)
            // console.log("we get product's data", state.value)

            // state.value.map( product => (
            //     console.log(product)
            // ))
        }
    }
})

export const { setProductData } = productSlice.actions;

export default productSlice.reducer;