import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelSlice = createSlice({
    name: 'channel-slice',
    initialState: {
        channelList: []
    },
    reducers: {
        setChannelList(state, action) {
           state.channelList = action.payload
        },
    }
})

const { setChannelList } = channelSlice.actions

const fetchChannlList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    dispatch(setChannelList(res.data.data.channels))
  }
}

export {fetchChannlList}
export default channelSlice