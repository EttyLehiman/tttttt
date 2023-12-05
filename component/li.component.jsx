import React from 'react';
export const LiWorker = (props) => {
    const { liWorker } = props;
    
return(
    <>
      <li>name: {liWorker.name} age:{ liWorker.age } salary: { liWorker.salary }</li>  
    </>
)
}