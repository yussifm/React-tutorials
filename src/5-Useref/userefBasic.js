import React, { useRef, useEffect } from "react";

// does't re-reder
// terget dom node /elements
// preservers values

const UserefBasic = () => {
	const refcontainer = useRef(null);
	const divcontainer = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refcontainer.current.value);
	};

	useEffect(() => {
		console.log(divcontainer.current);
		console.log(refcontainer.current);

		refcontainer.current.focus();
	});

	return (
		<>
			<h1>UsereF</h1>

			<form onSubmit={handleSubmit}>
				<input type="text" ref={refcontainer} />
				<button type="submit">submit</button>
			</form>

			<div ref={divcontainer}>
				<h2>Hell0 world</h2>
			</div>
		</>
	);
};

export default UserefBasic;
