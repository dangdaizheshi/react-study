import { createSlice } from "@reduxjs/toolkit";
import { http } from '../../utils/http' 
import {setToken as _setToken, getToken, delToken} from '../../utils/token'

const userSlice = createSlice({
    name: 'user-slice',
    initialState: {
        token: getToken() || ''
    },
    reducers:{
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        }
    }
})

const {setToken} = userSlice.actions
const fetchLoginData = (loginForm) => {
    return async(dispatch) => {
        const res = await http.post('/authorizations', loginForm)
        dispatch(setToken(res.data.data.token))
    }
}

export {fetchLoginData}
export default userSlice