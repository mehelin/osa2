// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherData =({ weatherData }) => {
    return (
        <div>
           
            <h2>Weather in {weatherData.list[0].name}</h2>
            <p><b>Temperature:</b> {weatherData.list[0].main.temp} Clecius</p>
            <p><b>Description:</b> {weatherData.list[0].weather[0].description} </p>
            <img src={weatherData.list[0].weather[0].icon} alt={`Weather icon`} width="200"/>
            <p><b>Wind: </b>{weatherData.list[0].wind.speed} mps direction {weatherData.list[0].wind.deg}</p>
        </div>
    )
}

const Weather = ({ cityWeather }) => {

    const [ weatherData, setWeather ] = useState ({})
   
    const [getCapital, setGetCapital] = useState(false);

// '976a38a9f9737ae56fcbb90ceae9fcb4'
   const api_key = process.env.REACT_APP_API_KEY    
   const api_base = "https://api.openweathermap.org/data/2.5"

   
    
    useEffect(() => {

        console.log('effect')
        axios
          .get(`${api_base}/find?q=${cityWeather}&appid=${api_key}&units=metric`)
          
          .then(response => {
            setWeather(response.data)
            setGetCapital(true)
            console.log('promise fulfilled' , response.data)
          })
          .catch(error => {
            console.log('fail', error)
          })
      }, [ cityWeather, api_key, api_base])
      console.log('render', cityWeather, 'weather')

   
    return (
        <div>
          
            { getCapital && <WeatherData weatherData={weatherData}/>}
            
        </div>
        
    )
}

export default Weather