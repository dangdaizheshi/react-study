import { useDispatch, useSelector } from "react-redux"
import userSlice from "../store/modules/userSlice"
import { useEffect } from "react"
import { fetchChannlList } from "../store/modules/channelSlice"
const {setAge} = userSlice.actions

const Son = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const {channelList} = useSelector(state => state.channel)

    useEffect(() => {
        dispatch(fetchChannlList())
    }, [dispatch])

    return (
        <div>
            我是 Son 组件
            <span>{user.name} + {user.age}</span>
            <br/>
            <button onClick={() => dispatch({type: 'user-slice/setAge', payload: user.age - 1})}>-</button> 
            <button onClick={() => dispatch(setAge(user.age + 1))}>+</button>
            <ul>
                {channelList.map(item => (<li key = {item.id}>{item.name}</li>))}
            </ul>
        </div>
    )
}

export default Son