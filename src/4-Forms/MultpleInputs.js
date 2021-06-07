import React, { useState, useEffect } from "react";

const MultpleInputs = () => {
	// const [firstName, setFirstName] = useState("");
	// const [secondName, setsecondName] = useState("");
	const [people, setPeople] = useState([]);
	const [person, setPerson] = useState({ firstName: "", secondName: "" });

    // dynamic form 
	const handleStateChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPerson({ ...person, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (person.firstName && person.secondName) {
			const Newperson = {
				...person,
				id: new Date().getDate.toString(),
			};

			setPeople((people) => {
				return [...people, Newperson];
			});
			setPerson({ firstName: '', secondName: '' });
		} else {
			console.log("empty values");
		}
	};
	return (
		<>
			<form
				className="form"
				onSubmit={handleSubmit}
				style={{
					margin: "100px",
					width: "300px",
					height: "200px",
					backgroundColor: "lightcyan",
					padding: "50px",
					borderRadius: "20px",
					textAlign: "center",
				}}
			>
				<div className="formControl">
					<label htmlFor="firstName"></label>
					<input
						type="text"
						name="firstName"
						id="firstName"
						onChange={handleStateChange}
					/>
				</div>
				<div className="formControl">
					<label htmlFor="secondName"></label>
					<input
						type="text"
						name="secondName"
						id="secondName"
						onChange={handleStateChange}
					/>
				</div>

				<button type="submit">Submit</button>
			</form>

			<div style={{ margin: "50px" }}>
				{people.map((person) => {
					const { id, firstName, secondName } = person;
					return (
						<div key={id}>
							<h2>{firstName}</h2>
							<h2>{secondName}</h2>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default MultpleInputs;
