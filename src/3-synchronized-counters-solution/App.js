import React from 'react'

class Counter extends React.Component {
  render() {
    const {increment, decrement, value} = this.props
    return (
      <div>
        <button onClick={increment}>+</button>
        {value}
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}

// TODO:
// Synchronize all the counters rendered in the App component
// by lifiting their state to the App component
export class App extends React.Component {
  state = {
    value: 0
  }

  increment = () => {
    this.setState(state => ({
      value: state.value + 1
    }))
  }

  decrement = () => {
    this.setState(state => ({
      value: state.value - 1
    }))
  }

  render() {
    const {increment, decrement, state} = this
    const {value} = state
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
        <Counter value={value} increment={increment} decrement={decrement} />
        <Counter value={value} increment={increment} decrement={decrement} />
        <Counter value={value} increment={increment} decrement={decrement} />
      </div>
    )
  }
}
