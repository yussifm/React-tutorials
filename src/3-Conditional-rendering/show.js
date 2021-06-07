import React, { useState, useEffect } from "react";

const Show = () => {
	const [show, setShow] = useState(false);
	return (
		<>
			<button onClick={() => setShow(!show)}>Show/Hide</button>
			{show && <Items />}
		</>
	);
};

const Items = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const checkwidth = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", checkwidth);
		return () => {
			window.removeEventListener("resize", checkwidth);
		};
	}, []);
	return (
		<>
			<h2>window width</h2>
			<h3>{width}px</h3>
		</>
	);
};

export default Show;
