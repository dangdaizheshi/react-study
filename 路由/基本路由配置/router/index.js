import Login from '../pages/Login'
import Home from '../pages/Home'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '',
        element: <div>我是主入口</div>
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    }
])

export default router