import About from './components/About'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Cart from './components/Cart'
import { CartProvider } from './components/CartContext'
import Checkout from './components/Checkout'
import Homepage from './components/Homepage/Homepage'
import { InventoryProvider } from './components/InventoryContext'
import Navigation from './components/Navigation/Navigation'



import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <InventoryProvider>
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
          <Route exact path = "/about">
            <About />
          </Route>
        </Switch>
      </Router>
      </CartProvider>
      </InventoryProvider>
    </div>
  );
}

export default App;