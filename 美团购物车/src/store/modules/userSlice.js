const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'user-slice',
    initialState: {
        name: '张三',
        gender: '男',
        age: 18
    },
    reducers: {
        setName(state, action) {
           /* 原始写法
            return {
                ...state,
                name: action.payload
            }
            */
           state.name = action.payload
        },
        setGender(state, action) {
            state.gender = action.payload
        },
        setAge(state, action) {
            state.age = action.payload
        }
    }
})

export default userSlice