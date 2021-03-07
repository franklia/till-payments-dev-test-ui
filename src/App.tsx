import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Customers from './pages/Customers';
import Customer from './pages/Customer';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/customers/:id'>
          <Customer />
        </Route>
        <Route path='/customers'>
          <Customers />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
