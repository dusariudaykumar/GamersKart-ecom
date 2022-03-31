import React from "react";
import "./PriceCard.css";
const PriceCard = () => {
  return (
    <div className="price-outer-container">
      <div className="price-inner-container">
        <div className="price-card card-title border-bottom">
          <h5 className="price-title">Price Details</h5>
        </div>
        <div className="card-info flex-col">
          <div className="price-details">
            <div className="price-pill flex">
              <h6>Price (3 items)</h6>
              <p>₹ 18,499</p>
            </div>
            <div className="price-pill flex">
              <h6>Discount</h6>
              <p>₹ 1000</p>
            </div>
            <div className="price-pill flex border-bottom">
              <h6>Delivery Charges</h6>
              <p>₹ 500</p>
            </div>
            <hr />
            <div className="price-pill flex">
              <h5>Total Amount</h5>
              <p>₹ 18,988</p>
            </div>
            <p>You will save ₹ 2,984 on this purchase</p>
          </div>
          <button className="btn btn-solid">Place order</button>
        </div>
      </div>
    </div>
  );
};

export { PriceCard };
