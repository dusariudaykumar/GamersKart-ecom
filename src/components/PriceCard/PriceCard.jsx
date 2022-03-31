import React from "react";
import { useCart } from "../../contexts/cart-context";
import "./PriceCard.css";
const PriceCard = () => {
  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce(
    (acc, curr) => {
      acc.price += curr.originalPrice * curr.qty;
      acc.discount +=
        ((curr.originalPrice * curr.discountPercent) / 100) * curr.qty;

      return acc;
    },
    {
      price: 0,
      discount: 0,
    }
  );
  const totalAmount = totalPrice.price - totalPrice.discount + 500;
  console.log(totalAmount);
  return (
    <div className="price-outer-container">
      <div className="price-inner-container">
        <div className="price-card card-title border-bottom">
          <h5 className="price-title">Price Details</h5>
        </div>
        <div className="card-info flex-col">
          <div className="price-details">
            <div className="price-pill flex">
              <h6>Price ({cartItems.length} items)</h6>
              <p>₹ {totalPrice.price}</p>
            </div>
            <div className="price-pill flex">
              <h6>Discount</h6>
              <p> - ₹ {totalPrice.discount.toFixed(2)}</p>
            </div>
            <div className="price-pill flex border-bottom">
              <h6>Delivery Charges</h6>
              <p> ₹ 500</p>
            </div>
            <hr />
            <div className="price-pill flex">
              <h5>Total Amount</h5>
              <p>₹{totalAmount}</p>
            </div>
            <p>You will save ₹ {totalPrice.discount} on this purchase</p>
          </div>
          <button className="btn btn-solid">Place order</button>
        </div>
      </div>
    </div>
  );
};

export { PriceCard };
