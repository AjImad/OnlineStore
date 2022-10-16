import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
    wishlists: [],
    // wishlistsRef: [{
    //     id: '',
    //     isFavorite: false
    // }],
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const tempWishlist = { ...action.payload, isFavorite: true }
            // state.wishlistsRef.push({ id: action.payload.id, isFavorite: true })
            state.wishlists.push(tempWishlist)
            console.log("added to wishlist bro")
        },
        removeFromWishlist: (state, action) => {
            const indexItem = state.wishlists.findIndex((item) => item.id === action.payload.id)
            state.wishlists.splice(indexItem, 1)
            // state.wishlistsRef.splice(indexItem, 1)
            console.log('removed form wishlist')
        }
    }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;