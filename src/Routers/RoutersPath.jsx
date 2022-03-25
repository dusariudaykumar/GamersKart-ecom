import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, Products } from "../pages/index";
import Mockman from "mockman-js";

const RoutersPath = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export { RoutersPath };