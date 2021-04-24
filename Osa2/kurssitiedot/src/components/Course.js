import React from 'react'

const Header = ({name}) => <h1>{name}</h1>

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Content = ({parts}) => {
  return (
    <div>
    {parts.map(
      part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
    )}
    </div>
  )
}

const Total = ({parts}) => {

  const exercises = parts.map(part => part.exercises)
  const total = exercises.reduce((sum, value) => sum + value)

  return(
    <div><b>total of {total} exercises</b></div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
