import React from 'react';
import { Worke } from './showWorkers.component'
import { AddWorker } from './addWorker.component'
export const Workers =()=> {

let showWork=React.useState(false);
let addWorker=React.useState(false);

    return (
        <div>
            <button onClick={()=>showWork[1](!showWork[0])}>להצגת/להסתרת העובדים</button>
             {showWork[0]==true?<Worke/>:false}
            <button onClick={()=>addWorker[1](!addWorker[0])}>להוספת עובד</button>
            {addWorker[0]==true?<AddWorker/>:false}
        </div>
    )
}