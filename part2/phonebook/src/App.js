import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import People from './components/People'
import Form from './components/Form'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([])
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

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])

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