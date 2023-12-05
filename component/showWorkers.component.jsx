import React from 'react';
import { worker } from '../data/workers';
import { LiWorker } from './li.component';

export const Worke = () => {
    let displayWorkers = React.useState('');

    return (
        <div>
            <div className='butto'>
            <button onClick={()=>displayWorkers[1]('')}>להצגת כל העובדים</button>
            <br></br>
            <input id="add" type="number" onChange={e =>  displayWorkers[1](e.target.value)} placeholder='הכנס סכום לסינון'></input>
            <button onClick={()=>displayWorkers[1](displayWorkers[0]) }>{displayWorkers[0]} :להצגת העובדים שמשכורתם מעל</button>
            </div>
            <ul>
             {worker
             .filter(item=>displayWorkers[0]===''?true:item.salary>=displayWorkers[0])
             .map(item => <LiWorker key={item.id} liWorker={item}/>)}   
            </ul>
        </div>
    )

}