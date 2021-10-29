import React, { useState } from 'react'
//import Note from './components/Note'

/*
const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

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
      <h2>Puhelinluettelo</h2>
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
} */

// window.alert(message);
// alert("message");

const App = () => {
  const [ persons, setPersons] = useState([
    { nimi: 'Arto Hellas' }
  ]) 
  const [ newnimi, setNewnimi ] = useState('')

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form>
      <div>suodata <input /></div>
      </form>
      <h2>Lisää uusi</h2>
      <div>
          nimi: <input />
        </div>
        <div>numero: <input /></div>
        <div>
          <button type="submit">lisää</button>
        </div>
      <h2>Numerot</h2>
      <div>debug: {newnimi}</div>
    </div>
  )

}

export default App
