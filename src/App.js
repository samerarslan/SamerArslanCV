import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import './App.css';

import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import Index from './Components/Index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
      </BrowserRouter>
    )
  }
}

export default App;
