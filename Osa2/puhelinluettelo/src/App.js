import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {


  const endpoint = 'http://localhost:3001/persons'

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ visible, setVisible ] = useState([])

  useEffect(() => {
    console.log('using Effect')
    axios
      .get(endpoint)
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
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
