import React from 'react'

class Counter extends React.Component {
  // TODO 1: initialize the state
  state = null

  // TODO 2: implement the increment and decrement function
  increment() {}

  decrement() {}

  render() {
    return (
      <div>
        {/** TODO 3: Attach the increment and decrement to the on click Events of the buttons **/}
        <button>+</button>
        {this.state.value}
        <button>-</button>
      </div>
    )
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
        {/** TODO: Use the Counter component**/}
      </div>
    )
  }
}
