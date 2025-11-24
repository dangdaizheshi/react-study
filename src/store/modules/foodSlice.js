import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodSlice = createSlice({
    name: 'food-slice',
    initialState: {
        foodsList: [],
        nowClick: 0,
        cartList: []
    },
    reducers: {
        setFoodList(state, action) {
            state.foodsList = action.payload
        },
        setNowClick(state, action) {
            state.nowClick = action.payload
        },
        addCartList(state, action) {
            const i = state.cartList.find(item => item.id === action.payload.id)
            if(i) i.count++
            else state.cartList.push(action.payload)
        }
    }
})

const {setFoodList} = foodSlice.actions
const fetchFoodList = () => {
    return async(dispatch) => {
        const res = await axios.get('http://localhost:3004/takeway')
        dispatch(setFoodList(res.data))
    }
}

export {fetchFoodList}
export default foodSlice