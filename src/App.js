import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

console.log('render', persons.length,'persons')
  

// window.confirm() kehottaa selainta näyttämään valintaikkunan, 
// jossa on valinnainen viesti, ja odottamaan, kunnes käyttäjä 
// joko vahvistaa tai peruuttaa valintaikkunan.

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
        window.alert(`${newName} on jo puhelinluettelossa`)
        return
    }
    const personObject = {
        name: newName,
        number: newNumber,
        date: new Date().toISOString(),
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
}


  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)

  }


  return (
    <div>
      <h1>Puhelinluettelo</h1>

      <Filter persons={newFilter}
      handleFilterChange={handleFilterChange}
      />

      <h1>Lisää uusi</h1>

      <PersonForm persons={persons} 
      setPersons={setPersons} 
      setNewName={setNewName}  
      setNewNumber={setNewNumber}
      handlePersonChange={handlePersonChange} 
      newNumber={newNumber} 
      handleNumberChange={handleNumberChange} 
      newName={newName} addPerson={addPerson}
      />
      <h1>Numerot</h1>
      <Persons persons={persons} newFilter={newFilter}/>
    </div>
  )
}

export default App