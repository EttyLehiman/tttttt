import React from 'react';
import { worker } from '../data/workers';
export const AddWorker = () => {

    const addWorkerButton = (event) => {
        event.preventDefault();
        const form=event.target;
        const newWorker = Object.fromEntries([...(new FormData(form)).entries()])
        newWorker.id = worker[worker.length - 1].id + 1;
        console.log(worker);
        worker.push(newWorker);
        form.reset();
    }

    return (
        <>
            <form name="newStop" onSubmit={e => addWorkerButton(e)}>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" name="name"></input>
                </div>
                <div>
                    <label htmlFor="age">age</label>
                    <input type="number" name="age"></input>
                </div>
                <div>
                    <label htmlFor="salary">salary</label>
                    <input type="number" name="salary"></input>
                </div>
                <button type="submit">Add Worker</button>
            </form>
        </>
    )



}