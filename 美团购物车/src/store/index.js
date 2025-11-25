import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './modules/counterStore';
import userSlice from "./modules/userSlice";
import goodsSlice from "./modules/goodsSlice"
import channelSlice from "./modules/channelSlice";
import foodSlice from "./modules/foodSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userSlice.reducer,
        goods: goodsSlice.reducer,
        channel: channelSlice.reducer,
        foods: foodSlice.reducer
    }
})

export default store