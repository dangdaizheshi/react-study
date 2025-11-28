// axios 封装
import axios from "axios";
import {getToken} from '../utils/token'

const http = axios.create({
    baseURL: 'http://127.0.0.1:3002',
    timeout: 5000
})

// 添加请求拦截器，可以在这里注入token
http.interceptors.request.use((config)=> {
    const token = getToken()
    if(token) config.headers.Authorization = token;
    return config
  }, (error)=> {
    return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use((response)=> {
    return response
  }, (error)=> {
    return Promise.reject(error)
})

export { http }