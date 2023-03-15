import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Routers from './components/Routers';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        <Routers />
      </div>
    );
  }
}

export default App;
