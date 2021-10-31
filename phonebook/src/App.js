import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/personsdata'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterName, setFilter ] = useState('')
  const [ errorMessage, setErrorMessage] = useState(true)
  const [ message, setMessage] = useState(null)

  useEffect(() => {
    
    personService
      .getAll()
      .then(initialNames => {
        setPersons(initialNames)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    } 

    const person = persons.find(person => person.name.toLowerCase() === nameObject.name.toLowerCase())
    const changedNumber = { ...person, number: nameObject.number } 
     
    // estää uuden nimen lisäämisen, jos nimi on jo olemassa
     if (persons.some(person => person.name.toLowerCase() === nameObject.name.toLowerCase())) { 
      // vanhan numeron korvaaminen uudella, henkilön tietojen päivittäminen
        (window.confirm(`${newName} on jo lisätty puhelinmuistioon. Korvataanko vanha numero uudella?`))
        personService
        .update(person.id, changedNumber)
        .then(updatedNumber => {
        setPersons(persons.map(person => person.name !== changedNumber.name ? person : updatedNumber))
        setMessage(
          `'${newName}' puhelinnumero on päivitetty`
        )
        setErrorMessage(false)
        setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch (error => {
          setMessage(
            `'${newName}' puhelinnumeroa ei päivitetty`
          )
          setErrorMessage(true)
          setTimeout(() => {
              setMessage(null)
            }, 5000)
         console.error('epäonnistui', error);
        })
    } else {
      // concat luo uuden taulukon, 
      // johon sisältyvät sekä vanhan taulukon että uuden kohteen sisältö.

      personService
      .create(nameObject)
      .then(returnedName => {
        setPersons(persons.concat(returnedName)) 
        setMessage(
          `Henkilö '${newName}' lisättiin puhelinluetteloon`
        ) 
        setErrorMessage(false)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      .catch (error => {
        setMessage(
          `Henkilö '${newName}' ei ole vielä puhelinluettelossa`
        ) 
        setErrorMessage(true)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        console.error('epäonnistui', error);
      })
    }
    setNewName(' ')
    setNewNumber(' ')
  }

  //  nimen poistaminen
  const handleDelete = (id, name) => {
    if (window.confirm(`Poista ${name} ?`)) {
      personService
      .remove(id)
      .then(deletedName => {
        setPersons(persons.filter(person => person.id !== id ? person : !deletedName))
        setMessage(`nimi '${name}' on poistettiin`) 
        setErrorMessage(false)
        console.log ('nimi on poistettu: ', name)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
    })
    .catch(error => {
      setMessage(
        `Henkilö '${name}' on jo poistettu`
      )
      setErrorMessage(true)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    console.error('epäonnistui', error);
    setPersons(persons.filter(p => p.id !== id))
    })   
  }
}

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

 // suodattaa (.filter) nimiä niihin, jotka sisältävät osia jo olemassa olevista nimistä
 // (.includes -metodi), kirjainkoolla ei ole merkitystä
const filteredNames = filterName === " "
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

 
return (
  <div>
    <h1>Puhelinluettelo</h1>

    <Notification message={message} errorMessage={errorMessage}/>
    <Filter filterName={filterName} handleFilterChange={handleFilterChange} />

    <PersonForm addPerson={addPerson} 
    newName={newName} 
    handleNameChange={handleNameChange} 
    newNumber={newNumber} 
    handleNumberChange={handleNumberChange} 
    /> 
      
    <h2>Numerot</h2>

    <Persons filteredNames={filteredNames} handleDelete={handleDelete} />
  </div>
)
}

export default App


/* window.confirm() kehottaa selainta näyttämään valintaikkunan, 
jossa on valinnainen viesti, ja odottamaan, kunnes käyttäjä 
joko vahvistaa tai peruuttaa valintaikkunan.*/

/*
  import axios from 'axios'
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
*/