import React from 'react'

const Filter = ({persons, setVisible}) => {

  //const [ filter, setFilter ] = useState('')

  const handleFilter = (event) => {
    const visible = persons.filter(person =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setVisible(visible)
    console.log('Visible: ', visible)
  }

  return (

    <div>
    filter shown with
    <input
      onChange = {handleFilter}
    />
    </div>
  )
}

export default Filter
