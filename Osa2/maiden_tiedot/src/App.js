import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const endpoint = 'https://restcountries.eu/rest/v2/all'
  const [countries, setCountries] = useState([])
  const [selectedCountries, setSelectedCountries] = useState([])
  //const [searchCondition, setSearchCondition] = useState('')

  const inputHandler = (event) => {
    console.log(event.target.value)
    const foundCountries =
      countries.filter(
        country => country.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    //console.log(foundCountries)
    setSelectedCountries(foundCountries)
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get(endpoint)
      .then(response => {
        console.log('promise fulfilled')
        //console.log(response.data)
        setCountries(response.data)
      })
  }, [])


  const CountryInfo = ({country}) => {
    console.log('one found')
    return (
      <div>
        <h2>{country.name}</h2>
        <div>Capital: {country.capital}</div>
        <div>Population: {country.population}</div>
        <h3>Languages</h3>
        <ul>{country.languages.map(l => <li key={l.name}>{l.name}</li>)}</ul>
        <img src={country.flag} width='100'/>
      </div>
    )
  }

  const CountryName = ({name}) => <div>{name}</div>

  const CountryList = () => {
    //console.log(selectedCountries)
    //const list = selectedCountries.map(country => <CountryName />)

    if(selectedCountries.length === 1) return <CountryInfo country={selectedCountries[0]} />

    if(selectedCountries.length > 10) return (
      <div>Too many countries</div>
    )

    return (
      selectedCountries.map(country => <CountryName key={country.name} name={country.name}/>)
    )
  }

  return (
    <div>
      <input
        onChange = {inputHandler}
      />
      <CountryList />
    </div>
  )
}

export default App
