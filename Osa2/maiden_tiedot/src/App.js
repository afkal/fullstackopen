import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './components/Weather'

const App = () => {

  const countryEndpoint = 'https://restcountries.eu/rest/v2/all'
  const [countries, setCountries] = useState([])
  const [selectedCountries, setSelectedCountries] = useState([])
  const [showInfo, setShowInfo] = useState(false) // Show country info
  const [selectedCountry, setSelectedCountry] = useState() // Show country info

  const inputHandler = (event) => {
    //console.log(event.target.value)
    setSelectedCountry()
    const foundCountries =
      countries.filter(
        country => country.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    //console.log(foundCountries)
    setSelectedCountries(foundCountries)
  }

  // Country list
  useEffect(() => {
    console.log('effect')
    axios
      .get(countryEndpoint)
      .then(response => {
        console.log('Countries fetch promise fulfilled')
        //console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  const CountryInfo = ({country}) => {
    console.log('Exactly one country found: ' + country.name)
    console.log(country)
    //capital = country.capital
      return (
        <div>
          <h2>{country.name}</h2>
          <div>Capital: {country.capital}</div>
          <div>Population: {country.population}</div>
          <h3>Languages</h3>
          <ul>{country.languages.map(l => <li key={l.name}>{l.name}</li>)}</ul>
          <img src={country.flag} width='100' alt='flag' border='1'/>
          <Weather city={country.capital} />
        </div>
      )
  }

  const handleCountryButtonClick = ({country}) => {
    //setShowInfo(true)
    setSelectedCountry({country})
  }

  const CountryRow = ({country}) =>
    <div>
      {country.name} <button onClick={() => handleCountryButtonClick({country})}>show</button>
    </div>

  const CountryList = () => {
    //console.log(selectedCountries)
    //const list = selectedCountries.map(country => <CountryName />)

    if(selectedCountries.length === 1) return <CountryInfo country={selectedCountries[0]} />

    if(selectedCountries.length > 10) return (
      <div>Too many countries</div>
    )

    return (
      selectedCountries.map(country => <CountryRow key={country.name} country={country}/>)
    )
  }


  if(selectedCountry) return (
    <div>Find <input onChange = {inputHandler}/>
      <div>&nbsp;</div>
      <CountryInfo country={selectedCountry.country} />
    </div>
  )

  return (
    <div>Find <input onChange = {inputHandler}/>
      <div>&nbsp;</div>
      <CountryList />
    </div>
  )
}

export default App
