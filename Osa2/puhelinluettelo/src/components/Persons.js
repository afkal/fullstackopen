import React from 'react'
import personService from '../services/persons'

const removeItem = ({id, name, setVisible, persons}) => {
  if (window.confirm("Do you really want to remove " + name + "?")) {
    console.log('remove item: ' + id + ' name: ' + name)
    personService
      .remove(id)
      .then(response => {
        console.log('removed')
        setVisible(persons.filter(person => person.id != id))
      })
  }
}

const Person = ({id, name, number, setVisible, persons}) => {
  return (
    <div>{name} {number} <button onClick={() => removeItem({id, name, setVisible, persons})}>remove</button></div>
  )
}

const Persons = ({persons, setVisible}) => {
  console.log('calling Persons')
  return(
    persons.map(person => <Person key={person.id} id={person.id} name={person.name} number={person.number} setVisible={setVisible} persons={persons}/>)
  )
}

export default Persons
