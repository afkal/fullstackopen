import React from 'react'
import personService from '../services/persons'

const removeItem = ({id, name, setVisible, setNotification, persons}) => {
  if (window.confirm("Do you really want to remove " + name + "?")) {
    console.log('remove item: ' + id + ' name: ' + name)
    personService
      .remove(id)
      .then(response => {
        console.log('removed')
        setVisible(persons.filter(person => person.id !== id))
        setNotification('Removed ' + name)
        setTimeout(() => {
          setNotification(null)
        }, 3000)
      })
  }
}

const Person = ({id, name, number, setVisible, setNotification, persons}) => {
  return (
    <div>{name} {number} <button onClick={() => removeItem({id, name, setVisible, setNotification, persons})}>remove</button></div>
  )
}

const Persons = ({persons, setVisible, setNotification}) => {
  console.log('calling Persons')
  return(
    persons.map(person => <Person key={person.name} id={person.id} name={person.name} number={person.number} setVisible={setVisible} setNotification={setNotification} persons={persons}/>)
  )
}

export default Persons
