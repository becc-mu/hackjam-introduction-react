import React from 'react'

const Car = ({img, manufacturer, model, price}) => (
  <div>
    <img alt={`${model}`} src={img} />
    <p>
      {model} made by {manufacturer}, starting at {price}€
    </p>
  </div>
)

export class App extends React.Component {
  state = {
    loading: false,
    cars: []
  }

  /** This is react telling you the component has been mounted in the dom and is ready to be used. */
  /** This is the right place for side effects */
  componentDidMount() {
    // TODO 1: change the state of loading to true
    // TODO 2: Fetch the cars data from 'http://localhost:7000/cars' using either fetch or axios
    // TODO 3: Place the cars data in your state
    this.setState({
      loading: true
    })
    fetch('http://localhost:7000/cars')
      .then(res => res.json())
      .then(cars => {
        this.setState({
          cars,
          loading: false
        })
      })
  }

  render() {
    const {loading, cars} = this.state
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
         */
        loading ? (
          <h1>Loading...</h1>
        ) : (
          cars.map(car => <Car {...car} key={car.id} />)
        )}
      </div>
    )
  }
}
