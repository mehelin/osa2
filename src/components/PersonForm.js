import React from 'react'

const PersonForm = (props) => {
    

    return (
        <div>
            <form onSubmit={props.addPerson}>
                <div>
                    nimi: <input
                        value={props.newName}
                        onChange={props.handlePersonChange}
                    />
                    <div>numero: <input
                        value={props.newNumber}
                        onChange={props.handleNumberChange} /></div>
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
        </div>

    )

}





export default PersonForm
