import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  Login,
  Products,
  SignUp,
  Cart,
  WishList,
} from "../pages/index";
import Mockman from "mockman-js";

const RoutersPath = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export { RoutersPath };
