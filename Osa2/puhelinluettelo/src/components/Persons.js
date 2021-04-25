import React from 'react'

const Person = ({name, number}) => {
  return (
    <div>{name} {number} </div>
  )
}

const Persons = ({persons}) => {
  console.log(persons)
  return(
    persons.map(person => <Person key={person.name} name={person.name}/>)
  )
}

export default Persons
