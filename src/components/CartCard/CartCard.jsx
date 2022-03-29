import React from "react";
import "./CartCard.css";
const CartCard = () => {
  return (
    <div class="cart-outer-container">
      <div class="cart-inner-container ">
        <div class="cart-image-container">
          <img
            class="cart-img"
            src="https://gamerskart.netlify.app/Asserts/controllers-img/PS5_DUALSENSE.jpg"
            alt=""
          />
        </div>
        <div class="cart-info">
          <p class="cart-card-title">PS5™ Controller</p>
          <div class="price-details">
            <span class="current-price">₹5,499</span>
            <span class="previous-price">₹5,990 </span>
            <span class="discount-percentage">8% off </span>
          </div>
          <div class="cart-qty-container">
            <button class="cart-qty-inc">+</button>
            <div class="qty-display">1</div>
            <button class="cart-qty-dec">-</button>
          </div>
          <div>
            <button class="cart-remove-item cart-color">
              <i class="material-icons-outlined"> shopping_cart </i>
              Remove From cart
            </button>
            <button class="cart-wishlist-btn wishlist-color">
              <i class="material-icons-outlined"> favorite_border </i>
              Move To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
