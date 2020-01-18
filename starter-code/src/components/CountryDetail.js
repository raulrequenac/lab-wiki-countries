import React from 'react'
import { Link } from 'react-router-dom';
import './CountryDetail.css'

const CountryDetails = ({country, getBorderName}) => {
  return country ? (
    <div className="CountryDetail col-9">
      <h1>{country.name.common}</h1>
      <table>
        <tbody>
        <tr>
          <td>Capital</td>
          <td>{country.capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{country.area}</td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              {country.borders.map((borderId, i) => {
                const borderName = getBorderName(borderId)
                return (
                  <li key={i}><Link to={`/${borderId}`}>{borderName}</Link></li>
                )
              })}
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  ) : <div></div>
}

export default CountryDetails
