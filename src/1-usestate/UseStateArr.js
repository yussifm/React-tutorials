import { data } from "../Data/data";
import { useState } from "react";

const UseStateArr = () => {
    const [people, setPeople] = useState(data);

    const DeletePerson = (id) => {
        let newPerson = people.filter((person) => person.id !== id);
        setPeople(newPerson);
    }
    
	return (
		<>
			{people.map((person) => {
				const { id, name } = person;
				return (
					<div key={id}>
                        <h2>{name}</h2>
                        <button onClick={() => DeletePerson(id)}>Delete</button>
					</div>
				);
            })}
            <button onClick={() => {setPeople([])}}>Clear All</button>
		</>
	);
};

export default UseStateArr;
