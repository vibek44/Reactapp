import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }, { name: 'Shit' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handlePersonInput=(event)=>setNewName(event.target.value)

  const addPerson=(event)=>{
                event.preventDefault()
               
                if( persons.some((el)=>el.name.toLowerCase()===newName.trim().toLowerCase()) ) {
                    alert(`${newName} is already added to phonebook`)
                } 

               else{
                const newperson={name:newName}
                setPersons(persons.concat(newperson))
                setNewName('') 
               }
               
                

             }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input   value={newName} onChange={handlePersonInput} />
        </div>
        <div>
          <button type="submit"  >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {  persons.map( (element)=><p key={element.name}>{element.name}</p>) }
    </div>
  )
}

export default App