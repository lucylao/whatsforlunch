import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
        </div>
      </div>
    );
  }
}

export default App;
