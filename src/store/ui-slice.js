import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { notification: null },
    reducers: {
        showNotification(state, action) {
            console.log("Before update uiSlice");
            state.notification = {
                message: action.payload.message,
                status: action.payload.status,
            };
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;