import { configureStore } from "@reduxjs/toolkit";
import billSlice from "./modules/billSlice";

const store = configureStore({
    reducer: {
        bill: billSlice.reducer
    }
})

export default store