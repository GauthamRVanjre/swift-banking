import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Transactions from "./components/Transactions/Transactions";
import Customers from "./components/customers/Customers";
import Payment from "./components/payment/Payment";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/payment" component={Payment} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
