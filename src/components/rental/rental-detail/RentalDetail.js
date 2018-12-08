import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from 'actions'

class RentalDetail extends Component {
  componentDidMount = () => {
    const rentalId = this.props.match.params.id

    this.props.dispatch(actions.fetchRentalById(rentalId))
  }

  render() {
    const { rental } = this.props

    if (rental.id) {
      return (
        <div>
          <p>{rental.title}</p>
          <p>{rental.city}</p>
          <p>{rental.description}</p>
          <p>{rental.dailyRate}</p>
          <p>{JSON.stringify(rental)}</p>
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}

const mapStateToProps = state => ({
  rental: state.rental.data
})

export default connect(mapStateToProps)(RentalDetail)
