// import logo from './logo.svg';
import "./App.css";
import Calculator from "./Components/Calculator";
// import Footer from './Components/Footer';
import Navbar from "./Components/Navbar";
import Exchange from "./Components/Exchange";
import UnitConversion from "./Components/UnitConversion";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Calculator />
          </Route>
          <Route exact path="/exchange">
            <Exchange />
          </Route>
          <Route exact path="/unitConverter">
            <UnitConversion />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
