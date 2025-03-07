import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Products from './pages/Products/products';
import Cart from './pages/Cart/cart';
import Home from './pages/Home/home';
import Layout from './components/Layout';
import { Provider } from "react-redux";
import store  from "./app/store";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout/>, 
    children: [
      {path: "/", element: <Home/>, errorElement: <div>404 NOT FOUND</div>},
      {path: '/home', element: <Home />},
      {path: '/products', element: <Products />},
      {path: '/cart', element: <Cart />},
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
