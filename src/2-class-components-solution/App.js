import React from 'react';

class Counter extends React.Component {
  // TODO 2: initialize the state
  state = {
    value: 0
  };

  // TODO 3: implement the increment and decrement function
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
        {/** TODO 4: Attach the increment and decrement to the on click Events of the buttons **/}
        <button onClick={this.increment}>+</button>
        {this.state.value}
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

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
        <h1>Im a class component!</h1>
        {/** TODO 1: Use the counter component **/}
        <Counter />
      </div>
    );
  }
}
