import { useState } from "react";

const UseState1 = () => {

    
    const [text, settext] = useState("Random");
    const handleStateChange = () => {
        if (text === "Random")
        {
        settext("Hello usestate");
            
        }
        else {
            settext("Random");
        }
    }
	return (
		<div>
            <h2 style ={{textAlign: 'center'}}>usestate</h2>
            <p>{text}</p>
            <button style={{
                textAlign: 'center',
                borderRadius: '10px',
                backgroundColor: 'lightblue',
                padding: '5px'
            }} onClick={handleStateChange}>Click to change text</button>
            
		</div>
	);
};

export default UseState1;
