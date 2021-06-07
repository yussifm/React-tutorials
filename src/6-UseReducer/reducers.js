export const reducer = (state, action) => {
	const newPeople = [...state.people, action.payload];
	if (action.type === "ADD_ITEM") {
		return {
			...state,
			people: newPeople,
			ismodelOpen: true,
			modelContent: "item Added",
		};
	}
	if (action.type === "NO_VALUE") {
		return {
			...state,
			ismodelOpen: true,
			modelContent: "Enter a value",
		};
	}

	if (action.type === "REMOVE_ITEM") {
		const newPeople = state.people.filter(
			(person) => person.id !== action.payload,
		);
		return {
			...state,
			people: newPeople,
			ismodelOpen: true,
			modelContent: "user remove",
		};
	}

	if (action.type === "CLOSE_MODEL") {
		return { ...state, ismodelOpen: false };
	}
	throw new Error("No matching state");
};
