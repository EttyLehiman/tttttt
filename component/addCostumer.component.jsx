import React from 'react';
import { cost } from '../data/costumers';
export const AddCostumer = () => {

    const addCostumerButton = (event) => {
        event.preventDefault();
        const form=event.target;
        const newCostumer = Object.fromEntries([...(new FormData(form)).entries()])
        newCostumer.id = cost[cost.length - 1].id + 1;
        console.log(cost);
        cost.push(newCostumer);
        form.reset();
    }

    return (
        <>
            <form name="newStop" onSubmit={e => addCostumerButton(e)}>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" name="name"></input>
                </div>
                <div>
                    <label htmlFor="age">age</label>
                    <input type="number" name="age"></input>
                </div>
                <button type="submit">Add Worker</button>
            </form>
        </>
    )



}