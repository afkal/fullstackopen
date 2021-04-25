import React from 'react'

const PersonForm = ({persons, setPersons,  name, setName}) => {

  const handleChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const handleFormSubmit = (event) => {
    const personObject = {
      name: name
    }
    event.preventDefault();
    setPersons(persons.concat(personObject))
    //
  }

  return (
    <form onSubmit = {handleFormSubmit}>
      <div>
        name: <input
        onChange = {handleChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
