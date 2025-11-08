import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import router from './router'

// 创建路由实例对象，并配置路由关系

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
        <App />
    </Provider>
    //<RouterProvider router={router}></RouterProvider>
);