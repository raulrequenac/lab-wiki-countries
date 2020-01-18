import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetail';
import countries from './countries.json'

function App() {
  const countryDetails = id => countries.find(country => country.cca3 === id)
  const countryBorders = id => countryDetails(id).name.common

  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <div className="list-group col-3">
          {countries.map((country, index) => (
            <Countries name={country.name.common} id={country.cca3} flag={country.flag} key={index} />
          ))}
        </div>
        <Switch>
          <Route exact path='/:id' component={(props) => <CountryDetails country={countryDetails(props.match.params.id)} getBorderName={countryBorders}/>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
