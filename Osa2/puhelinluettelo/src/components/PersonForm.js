import React from 'react'
import personService from '../services/persons'

const PersonForm = ({persons, setPersons,  name, setName, number, setNumber, setVisible}) => {

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

    const names = persons.map(person => person.name)

    // Check if name already exists
    if(names.includes(name)) {
      window.alert(`Name ${name} already exists`);

    } else {
      const personObject = {name, number}

      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setVisible(persons.concat(response.data))
        })
      /*
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(response.data))
          setVisible(persons.concat(response.data))
        })
      */
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
