import React from "react";
import ProductList from "./Components/ProductList";
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import CartState from './Context/CartState'
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <CartState>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartState>
      <Footer />
    </>
  );
}

export default App;