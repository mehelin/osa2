import React from 'react'

const Person = ({ person }) => person.name

const number = ({ person }) => ` ${person.number}`

const Persons = ({ persons, newFilter }) => {
    const personsToShow = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))

    return (

        personsToShow.map(person => {
            return (
                <div key={person.name + person.number}>
                    <Person key={person.name} person={person} />
                    <number key={person.number} person={person} /> <br></br>

                </div >
            )
        }
        )
    )

}

export default Persons