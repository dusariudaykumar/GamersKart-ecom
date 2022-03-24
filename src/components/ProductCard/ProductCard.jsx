import React from "react";
import FilterComponent from "../Filter/FilterComponent";

const ProductCard = ({ product }) => {
  const {
    id,
    coverImg,
    originalPrice,
    sellingPrice,
    title,
    totalStars,
    discountPercent,
    latest,
    inStock,
  } = product; // destructering
  return (
    <div key={id}>
      <div className="cards ">
        <div className="card-outer-container">
          <div
            className={`card-inner-container ${
              !inStock && "overlay-container"
            }`}>
            <div className="card-image">
              <img className="small-img" src={coverImg} alt="ps5-controller" />
              {latest ? <span className="card-label">New</span> : ""}
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
                <span className="discount-percentage">
                  {discountPercent}% off
                </span>
                <button className="btn-wishlist">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
              <div className="card-btns">
                <button className="card-cart-btn">
                  <i className="material-icons"> shopping_cart </i> Add To Cart
                </button>
                <button className="card-buy-btn">
                  <i className="material-icons">flash_on </i>Buy Now
                </button>
              </div>
            </div>
          </div>
          {!inStock && <span className="overlay-text">Out of Stock</span>}
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
