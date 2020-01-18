import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Countries />
      <Switch>
        <Route exact path='/' component={CountryDetails}/>
        <Route exact path='/:id' component={CountryDetails}/>
      </Switch>
    </div>
  );
}

export default App;
