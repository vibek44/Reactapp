import React from 'react';

const Total = ({course}) => {
    return (
        <div>
            <p>Total { course.parts.reduce((s,p)=>s+p.exercises,0) }</p>
        </div>
    );
};

export default Total;