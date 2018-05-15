import React from 'react';

class Counter extends React.Component {
  state = {
    value: 0
  };

  increment = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  decrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        {this.state.value}
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

// TODO:
// Synchronize all the counters rendered in the App component
// by lifiting their state to the App component
export class App extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}
