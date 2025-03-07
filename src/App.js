import './App.css';
import Home from './Home/home';
import Products from './Products/products';
import Cart from './Cart/cart';
import {  useState } from 'react';
import React from 'react'
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

const lazyProduct = React.lazy(() => import('./Products/products'));

function App() {
  // const [product, setProduct] = useState([]);
  // const [selectedProduct, setselectedProduct] = useState([]);

  return (
    <div className="App">
      <Router>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="products" element={
                  <React.Suspense fallback="Loading...">
                    <lazyProduct/>
                    {/* <lazyProduct product={product} setProduct={setProduct}/> */}
                  </React.Suspense>
                }/>
                {/* <Products product={product} setProduct={setProduct}/> */}
              </Route>
            </Routes>
          </BrowserRouter>
            {/* <Products product={product} setProduct={setProduct}/> */}
          {/* <Cart selectedProduct={selectedProduct} setselectedProduct={setselectedProduct}></Cart> */}
      </Router>
    </div>
  );
}

export default App;

