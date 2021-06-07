import React, { useState, useEffect } from 'react';
import {data} from "../Data/data";


const Basics = () => {
    const [people, setPeople] = useState(data);
    const remvePerson = (id) => {
        setPeople((people) => {
           return people.filter(person => person.id !== id);
       })
    }

    return (
        <section>
            <List people={people} removeperson={remvePerson}/>
            
        </section>
    )
};

const List = ({ people, removeperson }) => {
    return (
        <>
            {people.map((person) => {
                return (
                    <Single key={person.id} {...person} removeperson={removeperson}/>
                )
            })}
        </>
    )

};

const Single = ({ id, name, removeperson }) => {
    return <>
        <div>
            <h2>{name}</h2>
            <button onClick = {() => removeperson(id)}>delete</button>
        </div>
        </>
    
}

export default Basics
