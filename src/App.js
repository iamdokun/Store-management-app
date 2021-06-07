import React from 'react'
import { HashRouter, Link, Route, Switch } from 'react-router-dom';

import Todos from './components/todos';
import Navbar from './components/navbar';

import Store from './components/store';
import Stock from './components/stock';
import Cashier from './components/cashier';
import Login from './components/login';

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
     
     {/* <Todos/> */}
    <HashRouter>
      <Switch>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/login">
        <Login />
        </Route>
        <Route path="/stock">
        <Stock />
        </Route>
        <Route path="/cashier">
        <Cashier />
        </Route>
        
      </Switch>
    </HashRouter>
    </div>
  );
}

export default App;
