import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // initialize state
    this.state = {
      count: 0,
    };
  }

  // method to increment the counter
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // method to decrement the counter
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // reset method
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment} style={{ margin: "5px" }}>
          ➕ Increment
        </button>
        <button onClick={this.decrement} style={{ margin: "5px" }}>
          ➖ Decrement
        </button>
        <button onClick={this.reset} style={{ margin: "5px" }}>
          🔄 Reset
        </button>
      </div>
    );
  }
}

export default Counter;
