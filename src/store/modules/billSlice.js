import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billSlice = createSlice({
    name: 'bill-slice',
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(state, action) {
            state.billList = action.payload
        }
    }
})

const {setBillList} = billSlice.actions

const fetchBillList = () => {
    return async(dispatch) => {
        const res = await axios.get('http://localhost:3004/ka')
        dispatch(setBillList(res.data))
    }
}

export {fetchBillList}
export default billSlice