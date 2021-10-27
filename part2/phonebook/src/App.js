import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import People from './components/People'
import Form from './components/Form'
import pplService from './services/peoples'
import peoples from './services/peoples'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newNumber, setNewNumber] = useState('010-357-3254')
  const [ newName, setNewName ] = useState('Agatha')
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState(null)
  const formSubmit = (event) => {
    event.preventDefault()
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  const updatePhonebook = () => {
    pplService
      .getAll()
      .then(res => setPersons(res.data))
  }
  const deleteContact = (id, name) => {
    if (window.confirm('Delete ' + name + '?')) {
      pplService.del(id)
      .then(res => console.log(res.data))
      .then(updatePhonebook)
      
    } 

  }
  const add2Phonebook = () => {
    let foundPerson = persons.find(person => person.name === newName)
    if (foundPerson !== undefined) {
      if (window.confirm(`update ${newName}'s phone number?`)) {
        let newEntry = {...foundPerson, number: newNumber}
        updatePhonebook()
        let answer = false;
        for (const ppl in peoples) {
          if (ppl == newName) return answer = true;
        }
        if (answer) {
        pplService
          .update(newEntry.id, newEntry)
          .getAll()
          .then(res => setPersons(res.data))
        } else setMessage('Oops something went wrong')
      }
      
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}))
      let newPerson = {name: newName, number: newNumber}
      console.log(pplService)
      pplService
        .create(newPerson)
        .then(setMessage(`Added ${newName}`)
        )

    }
  }
  
  useEffect(() => {
    updatePhonebook()
  }, [])

  const filteredList = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={formSubmit}>
        <Filter defaultValue={filter} handleChange={handleFilterChange} />
        <Form 
          handleClick={add2Phonebook} 
          handlePerson={handlePersonChange} 
          handleNumber={(e) => setNewNumber(e.target.value)} 
          personValue={newName}
          numberValue={newNumber}  
          
        />
       
      </form>
      {message ? <p className='notice'>{message}</p> : <></> }
      <h2>Numbers</h2>
      <People list={filteredList} delPerson={() => deleteContact}/>
    </div>
  )
}

export default App