import { createSlice } from "@reduxjs/toolkit";

const goodsSlice = createSlice({
    name: 'goods-slice',
    initialState: {
        name: '苹果',
        price: 18
    },
    reducers: {
        setName(state, action) {
           state.name = action.payload
        },
        setPrice(state, action) {
            state.price = action.payload
        }
    }
})

export default goodsSlice