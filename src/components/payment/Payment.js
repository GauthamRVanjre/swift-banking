import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <>
      <h2 className="payment-heading">Payment Form</h2>

      <div className="payment-form-container">
        <form class="form">
          <input
            type="text"
            class="text"
            name="first-name"
            id="first-name"
            placeholder="Sender's first name"
            required
          />
          <input
            type="text"
            class="text"
            name="last-name"
            id="last-name"
            placeholder="receiver's first name"
            required
          />

          <input
            type="email"
            class="text"
            name="email"
            id="email"
            placeholder="enter the amount"
          />

          <textarea
            name="message"
            class="text"
            id="message"
            cols="30"
            rows="10"
            placeholder="Purpose of payment(optional)"
          ></textarea>

          <input type="submit" id="submit" class="text" value="submit" />
        </form>
      </div>
    </>
  );
};

export default Payment;
