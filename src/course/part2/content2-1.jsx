import React from 'react';

const Content = ( {course} ) => {
    return (
        <div>
            { course.parts.map((el)=> <p key={el.id}> {el.name} {el.exercises} </p> ) } 
        </div>
    );
};

export default Content;