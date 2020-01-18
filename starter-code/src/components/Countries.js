import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom';

const Countries = () => {
  return (
    <div className="Countries">
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <img alt="" src={country.flag}></img>
            <Link to={`/${country.cca3}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Countries
