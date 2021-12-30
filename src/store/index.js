import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import authSlice from "./auth-slice";

const store = configureStore({
    reducer: { auth: authSlice.reducer, ui: uiSlice.reducer },
});

export default store;