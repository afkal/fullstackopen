import React from 'react'

const Person = ({name, number}) => {
  return (
    <div>{name} {number} </div>
  )
}

const Persons = ({persons}) => {
  console.log('calling Persons')
  return(
    persons.map(person => <Person key={person.name} name={person.name} number={person.number}/>)
  )
}

export default Persons
