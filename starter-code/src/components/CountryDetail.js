import React from 'react'
import countries from '../countries.json'

const CountryDetails = (props) => {
  if (props.match.params.id) {
    return (
      console.log(props.match.params.id)
    )
  } else {
    return null
  }
}

export default CountryDetails
