import React, { useState } from 'react'


const UseStateCunter = () => {
    const [value, setValue] = useState(0);
    const advancedInc = () => {
        setTimeout(() => {
            // setValue(value + 1);
            setValue((preState) => preState+1)
        }, 2000);
    }
    return (
        <>
            <h2>Regular cunter</h2>
            <h1>{value}</h1>
            
            <button onClick={() => setValue(value +1)}>Increase</button>
            <button onClick={() => setValue(0)}>Reset</button>
            <button onClick={() => setValue(value - 1)}>decrease</button>
            
            <div>
                <h2>advanced counter</h2>
                <h1>{value}</h1>
                <button onClick={() =>advancedInc()}>click to increment</button>
            </div>
            
        </>
    )
}

export default UseStateCunter
