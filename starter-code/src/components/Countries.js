import React from 'react'
import { Link } from 'react-router-dom';
import './Countries.css'

const Countries = ({name, id, flag}) => {
  return (
    <p className="list-group-item list-group-item-action">
      <Link to={`/${id}`}>{flag} {name}</Link>
    </p>
  )
}

export default Countries
