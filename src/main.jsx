import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from  './Components/App/App.jsx'
import Header from  './Components/Header/Header.jsx'

import Test from  './Components/Posts/Posts/Test.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/test",
        element: <Test/>
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
