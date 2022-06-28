import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
    wishlists: [],
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlists.push(action.payload)
            console.log("added to wishlist bro")
        },
        removeFromWishlist: (state, action) => {

        }
    }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;