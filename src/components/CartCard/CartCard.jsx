import React from "react";
import { useCart } from "../../contexts/cart-context";

import "./CartCard.css";

const CartCard = ({ cartItem }) => {
  const { _id, coverImg, discountPercent, title, sellingPrice, originalPrice } =
    cartItem;
  return (
    <div className="cart-outer-container">
      <div className="cart-inner-container ">
        <div className="cart-image-container">
          <img className="cart-img" src={coverImg} alt="products" />
        </div>
        <div className="cart-info">
          <p className="cart-card-title">{title}</p>
          <div className="price-details">
            <span className="current-price">₹{sellingPrice}</span>
            <span className="previous-price">₹{originalPrice} </span>
            <span className="discount-percentage">{discountPercent}% off </span>
          </div>
          <div className="cart-qty-container">
            <button className="cart-qty-inc">+</button>
            <div className="qty-display">1</div>
            <button className="cart-qty-dec">-</button>
          </div>
          <div>
            <button className="cart-remove-item cart-color">
              <i className="material-icons-outlined"> shopping_cart </i>
              Remove From cart
            </button>
            <button className="cart-wishlist-btn wishlist-color">
              <i className="material-icons-outlined"> favorite_border </i>
              Move To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
