// import logo from './logo.svg';
import "./App.css";
import Index from "./Components/Index";
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
            <Index />
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
