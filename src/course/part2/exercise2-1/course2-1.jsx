import React from 'react';


const Header = ({course}) => <h1>{course.name}</h1>

const Content = ( {course} ) => {
      return (
              <div >
                { course.parts.map( (element)=>
                <p key={element.id}>{element.name} {element.exercises}</p>)}
            </div>
          )}

const Total = ({course}) => {
      return (
          <div>
              <h3>Total { course.parts.reduce((s,p)=>s+p.exercises,0) } exercise</h3>
          </div>
      )}


const Course= ({course}) => {
      return ( <div>
                { course.map((element)=>< div key={element.id}>
                <Header   course={element} /> 
                <Content  course={element} /> 
                <Total    course={element} />
                </div>
                  )}
            </div>   
          )}

export default Course