import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        user: [],
        isClicked: false, // If Login or Sign Up link clicked then change the status to True
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        logout() {},
        register(state, action) {},
        changeStatus(state, action) {
            console.log("Called");
            state.isClicked = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;