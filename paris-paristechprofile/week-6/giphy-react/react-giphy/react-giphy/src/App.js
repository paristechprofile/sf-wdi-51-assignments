import React, { Component } from 'react';
// import {
//   Route,
//   Link,
//   Switch
// } from 'react-router-dom';
import './App.css';

import SearchContainer from './SearchContainer/SearchContainer';
// import axios from 'axios';
// import SearchContainer from './searchContainer';


class Home extends Component {
  render() {
    return (
      // <div>
      //   <header>
      //     <NavBar/>
      //       </header>
            <main>
              <section className="row searchContainer">
              <SearchContainer/>
              </section>

            </main>
      //   <Footer/> 
      // </div>
    );
  }
}

export default Home;
