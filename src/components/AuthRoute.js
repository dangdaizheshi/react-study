// 高阶组件，控制路由跳转，若有 token 则正常访问，否则跳转到登录页面
import { getToken } from "../utils/token"
import { Navigate } from "react-router-dom" // 重定向组价

const AuthRoute = ({children}) => {
    const token = getToken() || ''
    if(token) return <>{children}</>
    else return <Navigate to = {'/login'} replace/>
}