import { createSlice } from "@reduxjs/toolkit";
import {setToken as _setToken, getToken, delToken} from '../../utils/token'
import {getLoginApi, getUserInfoApi} from '../../apis/user'

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
        },
        clearUserInfo(state) {
            state.userInfo = {}
            state.token = ''
            delToken()
        }
    }
})

const {setToken, setUserInfo} = userSlice.actions
const fetchLoginData = (loginForm) => {
    return async(dispatch) => {
        const res = await getLoginApi(loginForm)
        dispatch(setToken(res.data.token)) // 登录、发请求、存 token
    }
}
const fetchUserInfo = () => {
    return async(dispatch) => {
        const res = await getUserInfoApi()
        dispatch(setUserInfo(res.data.data))
    }
}

export {fetchLoginData, fetchUserInfo}
export default userSlice