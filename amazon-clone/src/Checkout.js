import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Jupiter21/Phase4/Lepton/Revised/Eng/acq_pc_3m.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout_title">Your shopping basket</h2>
        </div>
      </div>

      <div className="checkout_right">subtotal</div>
    </div>
  );
}

export default Checkout;
