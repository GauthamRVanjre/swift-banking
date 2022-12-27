import React, { useState, useEffect } from "react";
import "./Transactions.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const transactionsRef = collection(db, "transactions");

  useEffect(() => {
    const getTransactions = async () => {
      const data = await getDocs(transactionsRef);
      console.log(data.docs);

      setTransactions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTransactions();
  }, []);

  return (
    <>
      <h2 className="Transactions-heading">Transactions Details</h2>
      <table className="table table-striped">
        <thead className="table-heading">
          <tr>
            <th scope="col">Transaction ID</th>
            <th scope="col">Sender Name</th>
            <th scope="col">Receiver name</th>
            <th scope="col">Amount</th>
            <th scope="col">Purpose</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.senderName}</td>
                <td>{transaction.receiverName}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.paymentPurpose}</td>
                <td>{transaction.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Transactions;
