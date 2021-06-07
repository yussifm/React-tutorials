import React, { useState, useEffect, useReducer } from "react";
import Model from "./Model";
import { data } from "../Data/data";
import { reducer } from "./reducers";

const defaultState = {
	people: [],
	ismodelOpen: false,
	modelContent: "",
};
const Index = () => {
	const [state, dispatch] = useReducer(reducer, defaultState);
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name) {
			const newitem = { id: new Date().getTime().toString(), name };
			dispatch({ type: "ADD_ITEM", payload: newitem });
			setName("");
		} else {
			dispatch({ type: "NO_VALUE" });
		}
	};

	const closeModel = () => {
		return dispatch({ type: "CLOSE_MODEL" });
	};

	return (
		<>
			<div>
				{state.ismodelOpen && (
					<Model
						ModelContent={state.modelContent}
						CloseModels={closeModel}
					></Model>
				)}
			</div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button type="submit">add</button>
			</form>

			<div>
				{state.people.map((person) => {
					return (
						<div key={person.id}>
							<h3>{person.name}</h3>
							<button
								onClick={() =>
									dispatch({ type: "REMOVE_ITEM", payload: person.id })
								}
							>
								Remove
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Index;
