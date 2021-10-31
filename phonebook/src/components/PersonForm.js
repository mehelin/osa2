import React from 'react'

const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange, handleChangingNumber}) => {
    return (
      <form onSubmit={addPerson}>
         <h2>Lisää uusi</h2>
          <div>
            nimi: <input value={newName}
            onChange={handleNameChange}/>
          </div>
          <div>
            numero: <input value={newNumber}
            onChange={handleNumberChange}/>
            </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
    )
  }

  export default PersonForm