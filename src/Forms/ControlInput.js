import React, { useState, useEffect } from "react";

const ControlInput = () => {
	const [firstName, setFirstName] = useState("");
	const [secondName, setsecondName] = useState("");
	const [people, setPeople] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName && secondName) {
			const person = {
				id: new Date().getDate.toString(),
				firstName,
				secondName,
			};

			setPeople((people) => {
				return [...people, person];
			});
			setFirstName("");
			setsecondName("");
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
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="formControl">
					<label htmlFor="firstsecondName"></label>
					<input
						type="text"
						name="firstsecondName"
						id="secondName"
						value={secondName}
						onChange={(e) => setsecondName(e.target.value)}
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

export default ControlInput;
