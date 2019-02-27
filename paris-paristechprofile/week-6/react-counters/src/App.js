import React, { Component } from "react";
import Header from "./Header";
import ContainerList from './CounterList'

class App extends Component {
  state = {
    counters: 0
  }

  increaseCounters = () => {
    let counters = this.state.counters + 1
    console.log({counters})
    this.setState({ counters })
  }

  decreaseCounters = () => {
    let counters = this.state.counters - 1
    console.log({counters})
    this.setState({ counters })
  }
  
  render() {
    return (
      <div className="App">
        <Header
        countersCount = {this.state.counters}
        increaseCounters = {this.increaseCounters}
        decreaseCounters = {this.decreaseCounters}/>
        <ContainerList 
        counters = {this.state.counters} />
      </div>
    );
  }

}

export default App;