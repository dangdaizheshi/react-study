import { createSlice } from "@reduxjs/toolkit";

//利用 createSlice 创建 store
const counterStore = createSlice({
    name: 'counter',
    //配置初始化状态
    initialState: {
        count: 0,
    },
    // 修改数据的方法
    reducers: {
        //增方法
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        addToNum(state, action) {
            state.count +=  action.payload;
        }
    }
})

// 解构 action 函数
const { increment, decrement, addToNum } = counterStore.actions;

const reducer = counterStore.reducer;

export { increment, decrement, addToNum }
export default reducer