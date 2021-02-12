import React from 'react';
import Header from './header2-1' 
import Content from './content2-1'
import Total from './total2-1'

const Course= ({course}) => {
    return (
        <div>
          < Header course={course} />
          < Content course={course} />  
          < Total course={course} /> 
        </div>
    );
};

export default Course