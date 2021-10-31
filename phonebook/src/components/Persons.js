import React from 'react'

const Person = ({ person, handleDelete }) => {
    return (
      <div>
        <li className='name'>{person.name} {person.number} <button type='submit' style={{color: 'violet'}} onClick={() => handleDelete(person.id, person.name)}>poista</button></li>
      </div>
      
  )
  }

  const Persons = ({filteredNames, handleDelete}) => {

    return (
      <div>
        {filteredNames.map(person => 
           <Person key={person.name}
              person={person}
              handleDelete={handleDelete}></Person>
            )}
    </div>
    )
  }
  

export default Persons