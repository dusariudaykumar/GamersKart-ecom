import React from "react";
import "./PriceCard.css";
const PriceCard = () => {
  return (
    <div class="price-outer-container">
      <div class="price-inner-container">
        <div class="price-card card-title border-bottom">
          <h5 class="price-title">Price Details</h5>
        </div>
        <div class="card-info flex-col">
          <div class="price-details">
            <div class="price-pill flex">
              <h6>Price (3 items)</h6>
              <p>₹ 18,499</p>
            </div>
            <div class="price-pill flex">
              <h6>Discount</h6>
              <p>₹ 1000</p>
            </div>
            <div class="price-pill flex border-bottom">
              <h6>Delivery Charges</h6>
              <p>₹ 500</p>
            </div>
            <hr />
            <div class="price-pill flex">
              <h5>Total Amount</h5>
              <p>₹ 18,988</p>
            </div>
            <p>You will save ₹ 2,984 on this purchase</p>
          </div>
          <button class="btn btn-solid">Place order</button>
        </div>
      </div>
    </div>
  );
};

export { PriceCard };
