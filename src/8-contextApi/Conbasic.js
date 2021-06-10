import React, { useState, useContext } from "react";
import { data } from "../Data/data";

const PersonContext = React.createContext();
const Conbasic = () => {
	const [people, setPeople] = useState(data);
	const remvePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id);
		});
	};

	return (
		<PersonContext.Provider
			value={{ removeperson: remvePerson, people: people }}
		>
			<h3>ContxtAPi /usecontxt</h3>
			<List />
		</PersonContext.Provider>
	);
};

const List = () => {
	const maindata = useContext(PersonContext);
	return (
		<>
			{maindata.people.map((person) => {
				return <Single key={person.id} {...person} />;
			})}
		</>
	);
};

const Single = ({ id, name }) => {
	const { removeperson } = useContext(PersonContext);
	return (
		<>
			<div>
				<h2>{name}</h2>
				<button onClick={() => removeperson(id)}>delete</button>
			</div>
		</>
	);
};

export default Conbasic;
