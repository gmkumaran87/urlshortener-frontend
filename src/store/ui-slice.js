import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { message: null, status: null, isLoading: false },
    reducers: {
        showNotification(state, action) {
            console.log("Before update uiSlice");
            state.message = action.payload.message;
            state.status = action.payload.status;
            state.isLoading = action.payload.isLoading;
        },
        setLoading(state, action) {
            state.isLoading = true;
            state.message = action.payload.message;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;