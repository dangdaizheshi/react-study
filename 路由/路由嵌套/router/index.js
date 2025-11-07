import Login from '../pages/Login'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import About from '../pages/About'
import Board from '../pages/Board'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '',
        element: <div>我是主入口</div>
    },
    {
        path: '/login/:id/:name',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/layout',
        element: <Layout />,
        children: [
            {
                path: 'board',
                element: <Board></Board>
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    }
])

export default router