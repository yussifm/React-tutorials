import React, { useEffect, useState } from 'react'


const UseEffet2 = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const checkSize = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        }
    })

    return (
        <>
            <h4>Usestate, UseEffects</h4>
            <h2>{ width} px</h2>
        </>
    )
}

export default UseEffet2
