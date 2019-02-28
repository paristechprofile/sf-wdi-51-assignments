import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  }
  
  decreaseCount = () => {
    let newCount = this.state.count - 1;
    this.setState({
      count: newCount
    });
  }
  
  render() {
    return (
      <div className="Counter">
        <h4>Counter : {this.state.count}</h4>
        <button onClick={this.decreaseCount}>Decrease</button>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }


}

export default Counter;