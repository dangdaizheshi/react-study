import { createSlice } from "@reduxjs/toolkit";

//利用 createSlice 创建 store
const channelStore = createSlice({
    name: 'channel',
    //配置初始化状态
    initialState: {
        channel: []
    },
    // 修改数据的方法
    reducers: {
        setChannel(state, action) {
            state.channel = action.payload;
        }
    }
})

// 解构 action 函数
const { setChannel } = channelStore.actions;

const reducer = channelStore.reducer;


// 异步请求部分
const fetchChannel = () => {
    return async (dispatch) => {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        dispatch(setChannel(res.data.data.channels))
    }
}

export { fetchChannel }
export default reducer