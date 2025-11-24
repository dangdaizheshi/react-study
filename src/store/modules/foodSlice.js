import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodSlice = createSlice({
    name: 'food-slice',
    initialState: {
        foodList: []
    },
    reducers: {
        setFoodList(state, action) {
            state.foodList = action.payload
        }
    }
})

const {setFoodList} = foodSlice.actions
const fetchFoodList = () => {
    return async(dispatch) => {
        const res = await axios.get()
        dispatch(setFoodList(res.data))
    }
}

export {fetchFoodList}
export default foodSlice