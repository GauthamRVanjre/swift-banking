import React, { useEffect, useState } from "react";
import "./Customers.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const customersCollectionRef = collection(db, "customers");

  useEffect(() => {
    const getCustomers = async () => {
      const data = await getDocs(customersCollectionRef);
      console.log(data.docs);

      setCustomers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCustomers();
  }, []);

  return (
    <>
      <h2 className="customers-heading">Customers</h2>

      <table className="table table-striped">
        <thead className="table-heading">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Account number</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <td>{customer.Name}</td>
                <td>{customer.AccountNumber}</td>
                <td>{customer.Balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Customers;
