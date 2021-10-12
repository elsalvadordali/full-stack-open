import React, { useState } from 'react'
import Filter from './components/Filter'
import People from './components/People'
import Form from './components/Form'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newNumber, setNewNumber] = useState('010-357-3254')
  const [ newName, setNewName ] = useState('Agatha')
  const [ newFilter, setNewFilter ] = useState(' ')
  const formSubmit = (event) => {
    event.preventDefault()

  }
  let filter = []
  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const add2Phonebook = () => {
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already in phonebook`)
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
  }

  const filteredList = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={formSubmit}>
        <Filter defaultValue={newFilter} handleChange={(e) => setNewFilter(e.target.value)} />
        <Form 
          handleClick={add2Phonebook} 
          handlePerson={(e) => setNewName(e.target.value)} 
          handleNumber={(e) => setNewNumber(e.target.value)} 
          personValue={newName}
          numberValue={newNumber}  
        />
       
      </form>
      <h2>Numbers</h2>
      {console.log(persons, newFilter, filteredList)}
      <People list={filteredList} />
    </div>
  )
}

export default App