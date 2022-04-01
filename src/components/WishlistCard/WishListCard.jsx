import React from "react";

const WishListCard = ({
  product,
  moveToCartHandler,
  removeFromWishlistHandler,
}) => {
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
    <div className="cards " key={_id}>
      <div className="card-outer-container">
        <div className="card-inner-container">
          <div className="card-image">
            <img className="small-img" src={coverImg} alt="ps5-controller" />
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
              <button
                className="btn-wishlist"
                onClick={removeFromWishlistHandler}>
                <span className="material-icons-outlined favorite ">
                  favorite
                </span>
              </button>
            </div>
            <div className="card-btns">
              <button className="card-cart-btn" onClick={moveToCartHandler}>
                <i className="material-icons-outlined">
                  shopping_cart_checkout
                </i>
                Move To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { WishListCard };
