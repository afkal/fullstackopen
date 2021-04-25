import React from 'react'

const PersonForm = ({persons, setPersons,  name, setName, number, setNumber}) => {

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
  }

  const handleFormSubmit = (event) => {

    event.preventDefault();

    const names = persons.map(person => person.name)

    // Check if name already exists
    if(names.includes(name)) {
      window.alert(`Name ${name} already exists`);
    } else {
      const personObject = {
        name: name,
        number: number
      }
      setPersons(persons.concat(personObject))
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
