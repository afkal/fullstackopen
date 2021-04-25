import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {

  // Test persons

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  
  // Intiate test person
  /*
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Jaakko Saariluoma' }
  ])
  */
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>

      {/*<Filter ... />*/}

      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        name={newName}
        setName={setNewName}
        number={newNumber}
        setNumber={setNewNumber}
      />

      <h3>Numbers</h3>
      <Persons persons = {persons}/>
    </div>
  )
}

export default App
