import React from "react";
import { toast } from "react-toastify";
import "./CartCard.css";
const CartCard = ({ cartItem, removeHandler, quantityHandler }) => {
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
            {cartItem.qty <= 1 ? (
              <button
                className="cart-qty-dec dec-icon-container"
                onClick={() => removeHandler(_id)}>
                <span className="material-icons-outlined del-icon">delete</span>
              </button>
            ) : (
              <button
                className="cart-qty-dec"
                onClick={() => quantityHandler(_id, "decrement")}>
                <span className="material-icons-outlined">remove</span>
              </button>
            )}
            <div className="qty-display">{cartItem.qty}</div>
            {cartItem.qty >= 4 ? (
              <button className="cart-qty-inc" disabled>
                <span className="material-icons-outlined">add</span>
              </button>
            ) : (
              <button
                className="cart-qty-inc"
                onClick={() => quantityHandler(_id, "increment")}>
                <span className="material-icons-outlined">add</span>
              </button>
            )}
          </div>
          <div>
            <button
              className="cart-remove-item cart-color"
              onClick={() => removeHandler(_id)}>
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
