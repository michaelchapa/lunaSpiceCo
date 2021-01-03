import Navigation from './components/Navigation';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import Cart from './components/Cart';

import {React} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path = "/shipping">
            <Shipping />
          </Route>
          <Route exact path = "/payment">
            <Payment />
          </Route>
          <Route exact path = "/confirmation">
            <Confirmation />
          </Route>
          <Route exact path = "/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
