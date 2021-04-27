import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ visible, setVisible ] = useState([])
  const [ notification, setNotification ] = useState(null)

  useEffect(() => {
    console.log('using personService via Effect')
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
        setVisible(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
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
        setNotification={setNotification}
      />

      <h3>Numbers</h3>
      <Persons
        persons = {visible}
        setVisible = {setVisible}
        setNotification = {setNotification}
      />
    </div>
  )
}

export default App
