import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({city, api_key}) => {

  const weatherApiKey = process.env.REACT_APP_API_KEY
  const weatherEndpoint = 'http://api.weatherstack.com/current?access_key='+weatherApiKey+'&query='
  const [weather, setWeather] = useState([])

  // Weather API
  useEffect(() => {
    console.log('effect')
    axios
      .get(weatherEndpoint+city)
      .then(response => {
        console.log('Weather fetch promise fulfilled. Target: ' + city)
        //console.log(response.data)
        setWeather(response.data.current)
        console.log(response.data.current)
      })
  }, [])

  if(weather.weather_icons) {

    return (
      <div>
        <h3>Weather in {city}</h3>
        <div><b>{weather.weather_descriptions[0]}</b></div>
        <img src={weather.weather_icons[0]} alt='icon' border='1'/>
        <div>Temperature: {weather.temperature} celcius</div>
        <div>Wind: {weather.wind_speed} mph {weather.wind_dir}</div>

      </div>
    )
  }
  return (
    <div></div>
  )
}

export default Weather
