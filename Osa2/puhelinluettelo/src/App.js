import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ visible, setVisible ] = useState([])

  useEffect(() => {
    console.log('using personService via Effect')
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
        setPersons(response.data)
        setVisible(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setVisible={setVisible}/>

      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        name={newName}
        setName={setNewName}
        number={newNumber}
        setNumber={setNewNumber}
        setVisible={setVisible}
      />

      <h3>Numbers</h3>
      <Persons persons = {visible}/>
    </div>
  )
}

export default App
