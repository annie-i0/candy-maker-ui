import React from 'react'
import { NavLink } from 'react-router-dom'

const Manufacturer = ({ id, name, country }) => (
  // Use the information passed in as props (deconstructed via {} in the paramaters)
  // to render a div holding all of our information about a manufacturer.
  // Because this is a component it can be repeated infinitely no matter how many
  // manufacturers we add to our database.
  <div>
    <NavLink to={`/products/${id}`}>{`${name} (${country})`}</NavLink>
  </div>
)

export default Manufacturer