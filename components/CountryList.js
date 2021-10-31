import React, {useState} from 'react'
import Country from './Country'


const Button = ({ handleClick, text}) => (
    <button onClick={handleClick} >
        {text}
    </button>
)

const CountryList = ({ country }) => {

    const [ showCountry, setShowCountry] = useState(false);

    const handleCountryClick = () => {
        setShowCountry(!showCountry)
      }
    
    //  Jos painiketta napsautetaan, tiedot valitusta maasta tulevat näkyviin.
    // muuten vain luettelo maista ja painike
      if (showCountry) {
          return (
        <div>
            <ul>
                <Button handleClick={handleCountryClick} text='piilota'></Button>
                {<Country country={country}></Country>}
                
            </ul>
        </div>
    )
      }
      else {
          return (
              <div>
                {country.name} 
                <Button handleClick={handleCountryClick} text='näytä'></Button>
              </div>
          )
      }
      
    
}

export default CountryList