import React from 'react'

const Person=({contact})=> 
contact.map( (element)=><p key={element.name}>{element.name} {element.number}</p>)

export default Person;