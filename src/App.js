import Navigation from './components/Navigation';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Homepage from './components/Homepage';
import { CartProvider } from './components/CartContext';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path = "/">
            <Homepage />
          </Route>
          <Route exact path = "/cart">
            <Cart />
          </Route>
          <Route exact path = "/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
