import { useEffect } from 'react';

const Model = ({ ModelContent, CloseModels }) => {
    useEffect(() => {
        setTimeout(() => {
    CloseModels()
}, 3000)    })
    return (

        <>
            <div>
                <p>{ModelContent}</p>
            </div>
            
        </>
    )
}

export default Model
