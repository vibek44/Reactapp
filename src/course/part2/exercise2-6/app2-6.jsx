import React, { useState,useEffect } from 'react'
import Person from './component/Person'
import Filter from './component/Filterform'
import Personform from './component/Personform'
import personService from './services/person'


const App = () => {
const [ persons, setPersons ] = useState([]) 

const [ newName, setNewName ] = useState('')

const [ newNumber, setNewNumber ] = useState('')

const [ newFilter, setFilteredContact ] = useState('')

const filteredContact=persons.filter((el)=>el.name.toUpperCase().includes(newFilter.toUpperCase()))


useEffect(()=>{
   personService
   .getAll()
  .then(initialpersons=>setPersons(initialpersons))
},[]) 


const handlePersonInput=(event)=>setNewName(event.target.value)

const handlePersonNumber=(event)=>setNewNumber(event.target.value)

const handleFiltered=(event)=>setFilteredContact(event.target.value)

 
const addPerson=(event)=>{
                event.preventDefault()
               
                if( persons.some((el)=>el.name.toLowerCase()===newName.trim().toLowerCase()) ) {
                    alert(`${newName} is already added to phonebook,Replace old number with new`)
                    const person=persons.find((el)=>el.name.toLowerCase()===newName.trim().toLowerCase())
                    const changedperson={...person,number:newNumber}
                    personService
                    .update(person.id,changedperson)
                    .then(responsedata=>{
                      setPersons(persons.map((el)=>person.id!==el.id ? el:responsedata))
                    })

                } 
                else{
                  const newperson={name:newName,number:newNumber}
                  personService
                  .create(newperson)
                  .then(returnedPerson=>{
                    setPersons(persons.concat(returnedPerson))
                    setNewName('') 
                    setNewNumber('')
                  })
                 }}

 const deletePerson=(id,name)=>{
                window.confirm(`Delete ${name} ?`)
                personService
                .remove(id)
                setPersons(persons.filter((person)=>id!==person.id))
                  }

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
           {filteredContact.map((person)=>
           <Person key={person.id} 
            person={person} 
            deletePerson={()=>deletePerson(person.id,person.name)} /> )}
           
            </div>
        )
}

export default App