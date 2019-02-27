import React, { Component } from "react";

class Header extends Component {
  
  increaseCounters = () => {
    this.props.increaseCounters()
  }
  // this.setState((state, props) => ({
  //   counter: state.counter + props.increment
  // })); HOW CAN I USE THIS CORRECT FUNCTION?? https://reactjs.org/docs/state-and-lifecycle.html
  decreaseCounters = () => {
      this.props.countersCount >= 1 ? 
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
