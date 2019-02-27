import React, { Component } from "react";

class Header extends Component {
  
  increaseCounters = () => {
    this.props.increaseCounters()
  }

  decreaseCounters = () => {
      this.props.countersCount > 0 ? 
      this.props.decreaseCounters() : 
      null
  }

  render() {
    

    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button onClick={this.increaseCounters}>+</button>
        <button onClick={this.decreaseCounters}>-</button>
      </header>
    );
  }
}

export default Header;
