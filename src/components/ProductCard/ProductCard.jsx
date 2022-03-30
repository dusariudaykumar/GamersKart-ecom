import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";

const ProductCard = ({ product, addToCartHandler }) => {
  const {
    _id,
    coverImg,
    originalPrice,
    sellingPrice,
    title,
    totalStars,
    discountPercent,
    latest,
    inStock,
  } = product; // destructering
  const { cartItems } = useCart();
  return (
    <div key={_id}>
      <div className="cards ">
        <div className="card-outer-container">
          <div
            className={`card-inner-container ${
              !inStock && "overlay-container"
            }`}>
            <div className="card-image">
              <img className="small-img" src={coverImg} alt="ps5-controller" />
              {latest && <span className="card-label">New</span>}
              {!inStock && (
                <span className="card-label  out-of-stock-label">
                  Out Of Stock
                </span>
              )}
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
                {cartItems.find((e) => e._id === _id) ? (
                  <Link to="/cart">
                    <button className="card-cart-btn">
                      <i className="material-icons"> shopping_cart </i> View
                      Cart
                    </button>
                  </Link>
                ) : (
                  <button className="card-cart-btn" onClick={addToCartHandler}>
                    <i className="material-icons"> shopping_cart </i> Add To
                    Cart
                  </button>
                )}
                <button className="card-buy-btn">
                  <i className="material-icons">flash_on </i>Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
