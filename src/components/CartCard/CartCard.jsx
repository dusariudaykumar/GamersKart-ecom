import React from "react";
import "./CartCard.css";
const CartCard = () => {
  return (
    <div className="cart-outer-container">
      <div className="cart-inner-container ">
        <div className="cart-image-container">
          <img
            className="cart-img"
            src="https://gamerskart.netlify.app/Asserts/controllers-img/PS5_DUALSENSE.jpg"
            alt=""
          />
        </div>
        <div className="cart-info">
          <p className="cart-card-title">PS5™ Controller</p>
          <div className="price-details">
            <span className="current-price">₹5,499</span>
            <span className="previous-price">₹5,990 </span>
            <span className="discount-percentage">8% off </span>
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
