import React from 'react';
export const Header = () => {
    const currentDate = new Date();


    return (
        <div>
             <h1>"hello my office"</h1>
             <div className='date'>
            {currentDate.getDate()} / { currentDate.getMonth() } / { currentDate.getFullYear() }
            </div>
        </div>
    )
}