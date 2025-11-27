import { createSlice } from "@reduxjs/toolkit";
import { http } from '../../utils/http' 
import {setToken as _setToken, getToken, delToken} from '../../utils/token'

const userSlice = createSlice({
    name: 'user-slice',
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    reducers:{
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        }
    }
})

const {setToken, setUserInfo} = userSlice.actions
const fetchLoginData = (loginForm) => {
    return async(dispatch) => {
        const res = await http.post('/authorizations', loginForm)
        dispatch(setToken(res.data.data.token)) // 登录、发请求、存 token
    }
}
const fetchUserInfo = () => {
    return async(dispatch) => {
        const res = await http.get('/user/profile')
        dispatch(setUserInfo(res.data))
    }
}

export {fetchLoginData, fetchUserInfo}
export default userSlice