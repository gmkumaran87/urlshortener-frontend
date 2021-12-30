import { createSlice } from "@reduxjs/toolkit";
import { register } from "../services/auth.service";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        user: [],
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        logout() {},
        register(state, action) {},
    },
});

export const authActions = authSlice.actions;
export default authSlice;