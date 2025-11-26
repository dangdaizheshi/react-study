import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import App from './App';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './theme.scss'
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    //<RouterProvider router={router}></RouterProvider>
);