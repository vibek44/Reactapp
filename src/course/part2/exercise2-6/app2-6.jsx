import React, { useState } from 'react'
import Person from './component/Person'
import Filter from './component/Filterform'
import Personform from './component/Personform'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
const [ newName, setNewName ] = useState('')

const [ newNumber, setNewNumber ] = useState('')

const [ newFilter, setFilteredContact ] = useState('')

const handlePersonInput=(event)=>setNewName(event.target.value)

const handlePersonNumber=(event)=>setNewNumber(event.target.value)

const handleFiltered=(event)=>setFilteredContact(event.target.value)

 
const filteredContact=persons.filter((el)=>el.name.toUpperCase().includes(newFilter.toUpperCase()))



const addPerson=(event)=>{
                event.preventDefault()
               
                if( persons.some((el)=>el.name.toLowerCase()===newName.trim().toLowerCase()) ) {
                    alert(`${newName} is already added to phonebook`)
                } 

               else{
                const newperson={name:newName,number:newNumber}
                setPersons(persons.concat(newperson))
                setNewName('') 
                setNewNumber('')
               }}

 return (
            <div>
            <h2>Phonebook</h2>
            <Filter  value={newFilter} handleFiltered={handleFiltered}/>
            <h1>Add new contact</h1>
            <Personform addPerson={addPerson} 
              valuename={newName}
              valuenumber={newNumber}
              handlePersonInput={handlePersonInput}
              handlePersonNumber={handlePersonNumber} />
           
            <h2>Numbers</h2>
           <Person contact={filteredContact} /> 
            </div>
        )
}

export default App