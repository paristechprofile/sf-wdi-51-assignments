import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import NavBar from './NavBar/NavBar';
import Index from './Index/Index';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
          <Switch>
            <Route exact path = "/" component={ Index } />
            <Route exact path = "/blog" component={ Blog } />
          </Switch>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
