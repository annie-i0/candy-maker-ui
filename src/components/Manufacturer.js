import React from 'react'

const Manufacturer = ({ id, name, country }) => (
  // Use the information passed in as props (deconstructed via {} in the paramaters)
  // to render a div holding all of our information about a manufacturer.
  // Because this is a component it can be repeated infinitely no matter how many
  // manufacturers we add to our database.
  <div key={id} className="manufacturer">
    {`${name} (${country})`}
  </div>
)

export default Manufacturer