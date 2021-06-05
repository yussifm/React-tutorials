import React, { useEffect, useState } from 'react'


// Runs after every re-render
const Useeffect1 = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (value >= 2) {
            document.title = `New title update ${value}`;
        }
        
    }, [value])
    
    return (
        <>
            <h4>Usestate, UseEffects</h4>
            <h2>UseEffect</h2>
            <h1>{value}</h1>
            <button onClick={() => setValue(value +1)}>Click</button>
            
        </>
    )
}

export default Useeffect1
