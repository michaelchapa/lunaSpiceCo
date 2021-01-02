import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Cart from './components/Cart';

import {React} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path = "/homepage">
            <Homepage />
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
