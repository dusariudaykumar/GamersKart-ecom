import React from "react";

const CartCard = () => {
  return (
    <div className="cards cart-items-container">
      <div className="card-outer-container card-cart">
        <div className="card-inner-container card-cart-inner flex">
          <div className="card-image cart-card-image">
            <img className="small-img" src="" alt="ps5-controller" />
          </div>
          <div className="card-info cart-card-info flex-col">
            <span className="card-title">PS5™ Controller</span>
            <div className="price-details">
              <span className="current-price">₹5,499</span>
              <span className="previous-price">₹5,990 </span>
              <span className="discount-percentage">8% off </span>
            </div>
            <div className="quantity-wrapper">
              <button className="btn-inc">+</button>
              <input
                className="quantity-display"
                type="number"
                min="1"
                value="1"
              />
              <button className="btn-dec">-</button>
            </div>
            <div className="card-btns">
              <button className="card-cart-btn remove-item">
                <i className="material-icons-outlined"> shopping_cart </i>
                Remove From cart
              </button>
              <button className="card-buy-btn wishlist-btn">
                <i className="material-icons-outlined"> favorite_border </i>
                Move To Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
