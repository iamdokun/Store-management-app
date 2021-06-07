import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

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
    <BrowserRouter>
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
    </BrowserRouter>
    </div>
  );
}

export default App;
