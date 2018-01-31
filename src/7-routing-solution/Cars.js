import React from 'react'
import {Car} from './Car'

export class Cars extends React.Component {
  state = {
    loading: true,
    cars: null
  }

  componentDidMount() {
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

  shouldComponentUpdate(prevProps, prevState) {
    return true
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
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          cars.map(car => <Car {...car} key={car.id} />)
        )}
      </div>
    )
  }
}
