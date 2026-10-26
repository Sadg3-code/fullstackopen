import { useState } from 'react'
import Persons from './components/Persons'
import addPerson from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(newName === '') return
    if (persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())) {
    alert(`${newName} is already added to phonebook`)
    return
    }

      const personObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    console.log(persons)
  }

const peopleToShow = persons.filter(person =>
  person.name.toLowerCase().includes(newFilter.trim().toLowerCase())
)

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setNewFilter(event.target.value)

  return (
    <div>
      <h1>Phonebook </h1>
      <form>
        <div>
          Search: <input
          value = {newFilter}
          onChange = {handleFilterChange}/>
        </div>
      </form>
      <h2>Add a number</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value = {newName}
          onChange = {handleNameChange}/>
        </div>
          number:<input
          value = {newNumber}
          onChange = {handleNumberChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons = {peopleToShow}/>
    </div>
  )

}

export default App