import React, { Component } from 'react';
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
        <Index/>
        <Blog/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
