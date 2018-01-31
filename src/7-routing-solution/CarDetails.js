import React, {Component} from 'react'

export class CarDetails extends Component {
  state = {
    loading: true,
    car: null
  }

  fetchCarDetails = (id) => {
    this.setState({
      loading: true
    })
    fetch('http://localhost:7000/cars/' + id)
      .then(res => res.json())
      .then(car => {
        this.setState({
          car,
          loading: false
        })
      })
  }
  
  componentDidMount() {
    this.fetchCarDetails(this.props.id)
  }

  componentWillReceiveProps(nextProps){
    this.fetchCarDetails(nextProps.id)
  }

  render() {
    const {loading, car} = this.state
    const {id} = this.props
    return (
      loading  ? <h1>Loading car {id}...</h1>
        :
        <div>
          <img alt={`${car.model}`} src={car.img} />
          <p>
            {car.model} made by {car.manufacturer}, starting at {car.price}€
          </p>
        </div>
    )
  }
}
