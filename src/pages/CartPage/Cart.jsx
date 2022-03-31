import React from "react";
import { CartCard, PriceCard } from "../../components";
import "./Cart.css";
const Cart = () => {
  return (
    <div className="cart-products flex">
      <CartCard />
      <PriceCard />
    </div>
  );
};

export { Cart };
