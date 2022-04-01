import React from "react";
import "./OutOfStock.css";
const OutOfStockCard = ({ product }) => {
  const {
    _id,
    coverImg,
    originalPrice,
    sellingPrice,
    title,
    totalStars,
    discountPercent,
  } = product;
  return (
    <div className="card-outer-container">
      <div className="card-inner-container overlay-container">
        <div className="card-image">
          <img className="small-img" src={coverImg} alt="ps5-controller" />
          <span className="card-label  out-of-stock-label">Out Of Stock</span>
        </div>
        <div className="card-info flex-col">
          <span className="card-title">{title}</span>
          <div className="rating-badge flex">
            <span className="rating-badge-number">
              {totalStars}
              <i className="fas fa-star gold-color"></i>
            </span>
            <span className="rating-badge-number">|</span>
            <span className="rating-badge-number">5</span>
          </div>
          <div className="price-details">
            <span className="current-price">₹{sellingPrice}</span>
            <span className="previous-price">₹{originalPrice} </span>
            <span className="discount-percentage">{discountPercent}% off</span>

            <button className="btn-wishlist" disabled>
              <i className="fas fa-heart out-of-stock-wishlist  out-of-stock "></i>
            </button>
          </div>
          <div className="card-btns">
            <button className="card-cart-btn out-of-stock " disabled>
              <i className="material-icons"> shopping_cart </i> Add To Cart
            </button>

            <button className="card-buy-btn out-of-stock" disabled>
              <i className="material-icons">flash_on </i>Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OutOfStockCard };
