import React from 'react'
import { Link } from 'react-router-dom'

const RentalCard = ({ rental }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link className="rental-detail-link" to={`/rentals/${rental.id}`}>
        <div className="card bwm-card">
          <img className="card-img-top" src={rental.image} alt={rental.title} />
          <div className="card-block">
            <h6 className={`card-subtitle ${rental.category}`}>
              {rental.shared ? 'Shared' : 'Whole'} {rental.category} &#183;{' '}
              {rental.city}
            </h6>
            <h4 className="card-title">{rental.title}</h4>
            <p className="card-text">
              ${rental.dailyRate} per Night &#183; Free Cancelation
            </p>
          </div>
        </div>
      </Link>
      <Link to={`/rentals/${rental.id}`} className="card-link">
        More Info
      </Link>
    </div>
  )
}

export default RentalCard
