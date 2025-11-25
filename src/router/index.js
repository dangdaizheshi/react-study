import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout/index'
import Year from '../pages/Year/index'
import Mouth from '../pages/Mouth/index'
import New from '../pages/New/index'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'mouth',
                element: <Mouth />
            },
            {
                path: 'year',
                element: <Year />
            }
        ]
    },
    {
        path: 'new',
        element: <New />
    }
])

export default router