import React from "react";
import "./Transactions.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Transactions = () => {
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
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Transactions;
