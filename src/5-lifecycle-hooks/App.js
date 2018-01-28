import React from 'react'

export class App extends React.Component {
  state = {
    loading: false,
    cars: []
  }
  /** This lifecycle should not be used, it is deprecated */
  componentWillMount() {}

  /** This lifecycle receives the next props of the component, this is a good place to derive state from the props */
  componentWillReceiveProps(nextProps) {}

  /** This is react telling you the component has been mounted in the dom and is ready to be used. */
  /** This is the right place for side effects */
  componentDidMount() {
    // TODO 1: change the state of loading to true
    // TODO 2: Fetch the cars data from 'http://localhost:7000/cars' using either fetch or axios
    // TODO 3: Place the cars data in your state
  }

  /** This is a place where you can decide if the component should re-render or not */
  /** You will probably never need to use this lifecycle hooks */
  /** It's used for low-level optimizations */
  shouldComponentUpdate(prevProps, prevState) {
    return false
  }

  /** This is react telling you the component is about to unmount, this is the right place to do some cleanup */
  componentWillUnmount() {}

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
        {/**
         * TODO 4:
         * Display a loading message if your component didnt receive the car data yet, otherwise render the car datas
         * To render the car datas you should create a Car component
         */}
      </div>
    )
  }
}
