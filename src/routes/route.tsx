import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header/view";
import Products from "../features/products/view";
import Cart from "../features/cart/view";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" Component={Products} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
