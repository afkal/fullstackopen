import React from 'react'
import personService from '../services/persons'

const PersonForm = ({persons, setPersons,  name, setName, number, setNumber, setVisible, setNotification}) => {

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNumber(event.target.value)
  }

  const handleFormSubmit = (event) => {

    event.preventDefault();
    console.log('handleFormSubmit')

    const names = persons.map(person => person.name)

    // Check if name already exists and replace if requested by user
    if(names.includes(name)) {
      console.log('persons', persons)
      const contact = persons.filter(person => person.name === name)
      console.log('contact', contact)
      const currentId = contact[0].id
      const index = persons.findIndex(person => person.name === name)
      console.log('index ', index)
      console.log('person ', persons[index])
      console.log('id: ' + persons[index].id)
      if (window.confirm(name + " already exists, do you want to replace?")) {
        console.log('change wanted')
        const personObject = {name, number}

        //const newPersons = persons
        //newPersons[index] = personObject
        //persons[index] = personObject
        //console.log('persons updated with: ', persons)
        //newPersons[]
        // Update database and view
        personService
          .update(currentId, personObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== currentId ? person : response.data))
            setVisible(persons.map(person => person.id !== currentId ? person : response.data))
            console.log('updated database and view')
            setNotification('Updated ' + response.data.name)
            setTimeout(() => {
              setNotification(null)
            }, 3000)

            console.log(response.data)
          })
      }
      else {
        return
      }

    // Name does not exist -> create new entry
    } else {
      const personObject = {name, number}
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setVisible(persons.concat(response.data))
          setNotification('Added ' + response.data.name)
          setTimeout(() => {
            setNotification(null)
          }, 3000)
        })
    }
  }

  return (
    <form onSubmit = {handleFormSubmit}>
      <div>
        name: <input
        onChange = {handleNameChange}
        />
        number: <input
        onChange = {handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
