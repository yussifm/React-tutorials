import React, { useState, useEffect } from "react";

const ShortCircut = () => {
	const [text, setText] = useState("text");
	const [toggle, setToggle] = useState(false);
	const words = text || "Hello world";
	return (
		<>
			{/* words will display 'Hello world if text is empty */}
			<h2>{words}</h2>
			<button onClick={() => setToggle(!toggle)}>Switch</button>
			{toggle ? <h2>toggle on</h2> : <h2>toggle off</h2>}
		</>
	);
};

export default ShortCircut;
