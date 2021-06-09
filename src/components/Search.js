import React from 'react'

const Search = ({ term, setter }) => (
  // Renders a search box and sets the term to the value of the box, and everytime the user
  // changes the box it also calls the setter command that bubbles up to the parent component
  // changing the parent's state handler for this search box's state.
  <input type="text" name="search" value={term} onChange={event => setter(event.target.value)} />
)

export default Search
