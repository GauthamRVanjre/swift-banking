import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./Register.css";
import Modal from "../Modal";

const Register = () => {
  //   const customersCollectionRef = collection(db, "customers");
  const [customerId, setCustomerId] = useState(0);

  const [accountNumber, setAccountNumber] = useState();
  const [name, setName] = useState("");
  const [accountBalance, setAccountBalance] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const createCustomer = async (event) => {
    event.preventDefault();
    setCustomerId(customerId + 1);
    await addDoc(collection(db, "customers"), {
      AccountNumber: accountNumber,
      Balance: accountBalance,
      CustomerId: customerId,
      Name: name,
    });
    setName("");
    setAccountNumber(0);
    setAccountBalance(0);
    setIsOpen(true);

    console.log("data added");
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Register Customer</h2>
      <div className="payment-form-container">
        <form class="form">
          <input
            type="text"
            className="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <input
            type="number"
            className="text"
            name="Account balance"
            id="last-name"
            placeholder="Account Balance"
            value={accountBalance}
            onChange={(event) => setAccountBalance(event.target.value)}
            required
          />
          <input
            type="number"
            className="text"
            name="Account Number"
            id="last-name"
            value={accountNumber}
            placeholder="Account Number"
            onChange={(event) => setAccountNumber(event.target.value)}
            required
          />

          <input
            onClick={createCustomer}
            type="submit"
            id="submit"
            className="text"
            value="Register"
          />
        </form>
        <Modal onClose={() => setIsOpen(false)} open={isOpen}>
          User Registered
        </Modal>
      </div>
    </>
  );
};

export default Register;
