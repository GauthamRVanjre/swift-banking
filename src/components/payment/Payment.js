import { addDoc, AggregateField, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase";
import "./Payment.css";
import Modal from "../Modal";

const Payment = () => {
  const [senderName, setSenderName] = React.useState("");
  const [receiverName, setReceiverName] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [paymentPurpose, setPaymentPurpose] = React.useState("");
  const [status, setStatus] = React.useState("success");
  const [isOpen, setIsOpen] = useState(false);

  const createTransaction = async (event) => {
    event.preventDefault();
    setStatus("success");
    await addDoc(collection(db, "transactions"), {
      senderName,
      receiverName,
      amount,
      paymentPurpose,
      status,
    });
    setIsOpen(true);
    console.log(isOpen);
    console.log("data added");
  };

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
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required
          />
          <input
            type="text"
            class="text"
            name="last-name"
            id="last-name"
            placeholder="receiver's first name"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            required
          />

          <input
            type="number"
            class="text"
            name="email"
            id="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder="enter the amount"
          />

          <textarea
            name="message"
            class="text"
            id="message"
            cols="10"
            rows="10"
            placeholder="Purpose of payment"
            value={paymentPurpose}
            onChange={(e) => setPaymentPurpose(e.target.value)}
            required
          ></textarea>

          <input
            onClick={createTransaction}
            type="submit"
            id="submit"
            class="text"
            value="submit"
          />
        </form>
        <Modal onClose={() => setIsOpen(false)} open={isOpen}>
          Payment successful
        </Modal>
      </div>
    </>
  );
};

export default Payment;
