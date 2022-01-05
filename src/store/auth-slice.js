import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        countUrl: {},
        isLoggedIn: false,
        user: [],
        isClicked: false, // If Login or Sign Up link clicked then change the status to True
    },
    reducers: {
        login(state, action) {
            console.log("Updating login sate");
            state.isLoggedIn = true;
            //state.user = action.payload.user;
        },
        logout() {},
        register(state, action) {},
        setLoggedIn(state, action) {
            state.isLoggedIn = true;
        },
        loadUser(state, action) {
            const { countUrl, userUrl } = action.payload;
            state.user = userUrl;
            state.countUrl = countUrl;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;