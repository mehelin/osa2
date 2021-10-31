import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>kielet</h2>
            <ul>
                {country.languages.map((language) => <li key={language.id}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt={`Lippu ${country.name}`} width="300"/>
            {<Weather cityWeather={country.capital}></Weather>}
        </div>
        
    )
}

export default Country