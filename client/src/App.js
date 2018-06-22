import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// components
import favorites from './components/Favorites';
import Login from './components/Login';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div className="Content">
          <h1 className="header">What's for Lunch?</h1>
          <input value="Zipcode"></input>
          <br/>
          <br/>
          <button>Let's Eat</button>
          <br/>
          <br/>
          <textarea className="resturant"></textarea>
          <nav>
            <Link to="/">Search Again</Link>
            {" "}
            <Link to="/favorites">Favorites</Link>
            <Link to="/login">Login</Link>
          </nav>
          <Switch>
            <Route path='/favorites' component={favorites} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
