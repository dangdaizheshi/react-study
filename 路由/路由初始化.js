import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 创建路由实例对象，并配置路由关系
const router = createBrowserRouter([
    {
        path: '',
        element: <div>我是主入口</div>
    },
    {
        path: '/login',
        element: <div>我是登录</div>
    },
    {
        path: '/home',
        element: <div>我是主页</div>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<App />
    <RouterProvider router={router}></RouterProvider>
);