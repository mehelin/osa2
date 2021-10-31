

/*
import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', countries.length, 'maat')
/*
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }


  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>   
      <ul>
        {notesToShow.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App
*/

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import CountryList from './components/CountryList'

// Jos ehdon täyttäviä maita on liikaa (yli 10), kehoitetaan tarkentamaan hakuehtoa:
const SearchedCountries = ({selectedCountry, countries}) => {
  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(selectedCountry.toLowerCase()))
  
  if (filteredCountries.length > 10) {
    return (
      'Liikaa osumia, määritä toinen suodatin'
    )
  }
  if (filteredCountries.length > 1 ) {
    return (
      // näyttää luettelon maista, jotka vastaavat ehtoja
    filteredCountries.map(selectedCountry => <CountryList key={selectedCountry.name} country={selectedCountry}></CountryList>) 
    )
  }
  if (filteredCountries.length === 1) {
    const oneCountry = filteredCountries[0]
    return (
      <Country country={oneCountry}></Country>
    )
  } else {
    return null
  }

}

const App = () => {

  const [countries, setCountries ] = useState ([])
  const [ selectedCountry, setSelected ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  
const handleSelectedChange = (event) => {
  console.log(event.target.value)
    setSelected(event.target.value)
}

// Kun ehdon täyttäviä maita on enää yksi, näytetään maan perustiedot, lippu sekä siellä puhutut kielet:
return (
  <div>
    
      Etsi maita <input value={selectedCountry} onChange={handleSelectedChange} ></input>
    <div>
      <SearchedCountries selectedCountry={selectedCountry} countries={countries}></SearchedCountries>

    </div>
    
  </div>
)

}

export default App