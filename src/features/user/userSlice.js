import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    name: "",
    email: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            // console.log("name: ", state.name, "email: ", state.email)
        },
        setSignOutState: state => {
            state.name = null;
            state.email = null;
        }
    }
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export default userSlice.reducer;