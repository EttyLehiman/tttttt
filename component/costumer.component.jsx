import React from 'react';
import { cost } from '../data/costumers';
import { AddCostumer } from '../component/addCostumer.component';

export const Costumers = () => {


let showCost=React.useState(false);
let addCostumer=React.useState(false);

    return (
        <div>
            <button onClick={()=>showCost[1](!showCost[0])}>להצגת/להסתרת הלקוחות</button>
            <button onClick={()=>addCostumer[1](!addCostumer[0])}>להוספת לקוח</button>
            {addCostumer[0]==true?<AddCostumer/>:false}
            <ul>
             {cost
             .filter(item=>showCost[0]===true?true:false)
             .map(item => <li>name: {item.name} age:{ item.age } </li>)}   
            </ul>
        </div>
    )
}