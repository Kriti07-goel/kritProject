import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import Cart from './components/Cart';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/" component={HomePage} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
