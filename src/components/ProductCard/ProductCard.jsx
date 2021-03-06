import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { OutOfStockCard } from "../OutofStockCard/OutOfStockCard";

const ProductCard = ({ product, addToCartHandler, addToWishlistHandler }) => {
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
  const { wishlistItems, removeFromWishlistHandler } = useWishlist();
  return (
    <div key={_id}>
      <div className="cards ">
        {inStock ? (
          <div className="card-outer-container">
            <div
              className="card-inner-container
              ">
              <div className="card-image">
                <img
                  className="small-img"
                  src={coverImg}
                  alt="ps5-controller"
                />
                {latest && <span className="card-label">New</span>}
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
                  {wishlistItems.find((e) => e._id === _id) ? (
                    <button
                      className="btn-wishlist "
                      onClick={() => removeFromWishlistHandler(_id)}>
                      <span className="material-icons-outlined favorite ">
                        favorite
                      </span>
                    </button>
                  ) : (
                    <button
                      className="btn-wishlist"
                      onClick={addToWishlistHandler}>
                      <i className="fas fa-heart "></i>
                    </button>
                  )}
                </div>
                <div className="card-btns">
                  {cartItems.find((e) => e._id === _id) ? (
                    <Link to="/cart">
                      <button className="card-cart-btn">
                        <i className="material-icons">
                          {" "}
                          shopping_cart_checkout{" "}
                        </i>
                        View Cart
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="card-cart-btn"
                      onClick={addToCartHandler}>
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
        ) : (
          <OutOfStockCard product={product} />
        )}
      </div>
    </div>
  );
};

export { ProductCard };
